import { FaCamera, FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { DateBox } from "./DateBox";
import { EmojiBox } from "./EmojiBox";
import { useEffect, useRef, useState } from "react";
import autosize from "autosize";
import { Category, classifyByCategoryCode } from "../utils/manageCategory";
import { Content } from "../pages/FeedDetail";
import { contentApi, diaryApi } from "../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContentForCreate } from "../services/api/ContentApi";

function MidCategoryInput({categoryName, categoryId, color, content, onChange, onValueChange}
    :{categoryName: string, categoryId: number, color: string, content:Content|null, onChange: (isChanged:boolean) => void, 
    onValueChange: (newValue:ContentForCreate) => void}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // middle contents의 text 부분.
    const [contentsText, setContentsText] = useState<string>(content?.text || '');
    // contentsText의 textArea 높이 조절용 ref
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if(textAreaRef) {
            autosize(textAreaRef.current as HTMLTextAreaElement);
        }
    });

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileInput, setFileInput] = useState(content?.photoUrl || null);
    const [file, setFile] = useState<File>();
    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const selectedFile = e.target.files ? e.target.files[0] : null; // 파일이 선택되지 않은 경우 null 할당
        if (selectedFile) {
            setFile(selectedFile);
            const fileUrl = URL.createObjectURL(selectedFile);
            setFileInput(fileUrl);
            onChange(content?.photoUrl !== fileUrl);
            onValueChange({
                contentId: content?.id||null,
                diaryId: 0,
                categoryId: categoryId,
                done: isDone,
                text: contentsText,
                img: selectedFile
            });
        } else {
            console.error("파일이 선택되지 않았습니다.");
        }
    }
    const handleClick = () => {
        console.log('click');
        fileInputRef.current?.click(); // fileInputRef.current가 null이 아닌지 확인 후 클릭 메서드 호출
    };

    const [isDone, setIsDone] = useState<boolean>(content?.done || false);

    // useEffect(() => {
    //     onValueChange({
    //         diaryId: 0,
    //         categoryId: categoryId,
    //         done: isDone,
    //         text: contentsText,
    //         img: file
    //     });
    // }, [categoryId, contentsText, file, isDone, onValueChange]);

    return(
        <div className = "BoxM" style={{backgroundColor: color}}>
            <div className="FlexRow">
                <div className="FlexRow" style={{gap: '3vw'}}>
                    <div className="RoundCenter" 
                    style={{width: '3vh', height: '3vh', backgroundColor: isDone? 'grey' : 'white'}}
                    onClick={() => {setIsDone(!isDone); onChange(content?.done !== isDone); onValueChange({
                        contentId: content?.id||null,
                        diaryId: 0,
                        categoryId: categoryId,
                        done: !isDone,
                        text: contentsText,
                        img: file
                    });}}>
                        {isDone? <FaCheck color="white"/>: null}
                    </div>
                    <h3>{categoryName}</h3>
                </div>
                {isOpen? <FaChevronUp onClick={() => {setIsOpen(!isOpen)}}/> : <FaChevronDown onClick={() => {setIsOpen(!isOpen)}}/> }
            </div>
            {isOpen ? 
                <div className = "MiddleContents"> 
                {fileInput==null?
                    <div>
                        <input
                            type="file"
                            ref= {fileInputRef}
                            name='images'
                            onChange={(e) => onSelectFile(e)}
                            style={{display:'none'}}
                            accept=".png, .jpg, image/*"
                        />
                        <div className="RoundCenter" 
                            onClick={handleClick}
                            style={{height: '10vh', width: '10vh', backgroundColor: 'white'}}>
                            <FaCamera size={'60%'} color="#E5E5E5"/>
                        </div>
                    </div>
                    :
                    <img src={typeof(fileInput)==='string'?fileInput:''} alt='' style={{overflow:'auto', maxHeight:'20vh', maxWidth: '70vw'}}/>
                    // TODO: 이미지가 이미 있을 때는 클릭해도 입력창이 뜨지 않음 
                }
                
                <textarea
                    className="ContentsTextArea"
                    ref={textAreaRef}
                    value={contentsText}
                    onChange={(e) => {setContentsText(e.target.value); onChange(content?.text !== contentsText); onValueChange({
                        contentId: content?.id||null,
                        diaryId: 0,
                        categoryId: categoryId,
                        done: isDone,
                        text: e.target.value,
                        img: file
                    });}}
                    placeholder={"More info"}
                    />
                </div>
            : undefined}
        </div>
    );
}

function LargeCategoryWrapper({category, categoryList, contents, onInputChange, onInputValueChange} 
    : {category: string, categoryList: Category[], contents: Content[],
         onInputChange: (isChanged:boolean) => void, onInputValueChange: (newValue:ContentForCreate) => void}){
    return(
        <div className="BoxL" style={{padding: '3vw'}}>
            <h2>{category}</h2>
            {categoryList.map((midCategory) => {
                // Find the contents that match the current midCategory
                const matchingContents = contents.find(content => content.midCategory === midCategory.midCategory);
                return (
                    <MidCategoryInput 
                        categoryName={midCategory.midCategory} 
                        categoryId={midCategory.id} 
                        color={midCategory.color} 
                        content={matchingContents || null} // Pass the matching contents as a prop, if undefined, pass null
                        onChange={onInputChange}
                        onValueChange={onInputValueChange}
                    />
                );
            })}
        </div>
    );
}

export interface Diary {
    id: number;
    date: number[];
    contents: JSON[];
}



export function DiaryInput({curDiary, categorys} : {curDiary: Diary|null, categorys: Category[]}) {
    const classifiedContents:Content[][] = classifyByCategoryCode(curDiary?.contents || []);
    const classifiedCategorys:Category[][] = classifyByCategoryCode(categorys);

    const [hasInputChange, setHasInputChange] = useState<boolean>(false);
    const [inputValues, setInputValues] = useState<ContentForCreate[]>([]);
    const handleInputChange = (isChanged:boolean) => {
        // Do something with the new value...
        // Then set the hasInputChange state
        setHasInputChange(isChanged);
        console.log("input changed: ", isChanged); //TODO 제대로 감지 못함 컴포넌트가 새로 생겨서인지 무조건 true로 나옴
    };
    const handleInputValueChange = (newValue:ContentForCreate) => {
        console.log("handleInputValueChange called with", newValue);
        setInputValues(prevValues => {
            const newValues = prevValues.filter(value => value.categoryId !== newValue.categoryId);
            newValues.push(newValue);
            return newValues;
        });
    }
    const onClickSaveBtn = async () => {
        if(!hasInputChange) {
        // TODO: 사용자가 체크박스 체크했다가 취소하거나 뭔가 썼다 지워도 hasInputChange는 true로 남아있음. 수정 필요
            toast("You haven't added any information yet.");
            return;
        }
        if(curDiary === null) {
            console.log("curDiary is null, creating one");
            const today = new Date();
            await diaryApi.create({date:today});
            console.log(`Diary created for ${today}`);
            curDiary = await diaryApi.getByDate(today);
        }
        //trigger save in each midCategoryInput
        inputValues.forEach(async (content) => {
            if(curDiary === null) {
                console.error("curDiary is null, something went wrong");
                return;
            }
            if(content.contentId == null) {
                await contentApi.create({ ...content, diaryId: curDiary.id });
            } else {
                await contentApi.update({ ...content, diaryId: curDiary.id });
            }
        });
        toast("One more piece of information has been added to help people.");
    }

    return(
        <div>
            <div className="BoxL" style={{paddingBottom: '1vh'}}>
                <DateBox date={new Date()} needSave={true} clickHandler={onClickSaveBtn}/>
                {curDiary!==null?<EmojiBox diaryId={curDiary.id}/>:<></>}
            </div>
            <div className = "FlexColumn">
                {
                    classifiedCategorys.map((categoryList:Category[], index) => {
                        if (categoryList.length === 0) return null;
                        return (
                            <LargeCategoryWrapper
                                category={categoryList[0].category}
                                categoryList={categoryList}
                                contents={classifiedContents[index]}
                                onInputChange={handleInputChange}
                                onInputValueChange={handleInputValueChange}
                            />
                        );
                    })
                }
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
        </div>
    );
}