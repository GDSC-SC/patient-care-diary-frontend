import { FaCamera, FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { DateBox } from "./DateBox";
import { EmojiBox } from "./EmojiBox";
import { useEffect, useRef, useState } from "react";
import autosize from "autosize";
import { Category, classifyByCategoryCode } from "../utils/manageCategory";
import { Content } from "../pages/FeedDetail";

function CheckBtnCircle({isDone, setIsDone}: {isDone: boolean, setIsDone: React.Dispatch<React.SetStateAction<boolean>>}){
    return(
        <div className="RoundCenter" style={{width: '3vh', height: '3vh', backgroundColor: isDone? 'grey' : 'white'}} onClick={() => (setIsDone(!isDone))}>
                {isDone? <FaCheck color="white"/>: null}
        </div>
    );
};

function MidCategoryInput({categoryName, categoryId, color, content}
    :{categoryName: string, categoryId: number, color: string, content:Content|null}) {
    const [isDone, setIsDone] = useState<boolean>(content?.done || false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // middle contents의 text 부분.
    const [contentsText, setContentsText] = useState<string>(content?.text || '');
    // contentsText의 textArea 높이 조절용 ref
    const [imageUrl, setImageUrl] = useState<string>(content?.photoUrl || '');
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if(textAreaRef) {
            autosize(textAreaRef.current as HTMLTextAreaElement);
        }
    });

    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const [fileInput, setFileInput] = useState(null as any);

    const handleClick = () => {
        console.log('click');
          fileInputRef.current?.click(); // fileInputRef.current가 null이 아닌지 확인 후 클릭 메서드 호출
        
      };

    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const selectedFile = e.target.files ? e.target.files[0] : null; // 파일이 선택되지 않은 경우 null 할당
        if (selectedFile) {
            const fileUrl = URL.createObjectURL(selectedFile);
            setFileInput(fileUrl);
        } else {
            console.error("파일이 선택되지 않았습니다.");
        }
    }
    return(
        <div className = "BoxM" style={{backgroundColor: color}}>
            <div className="FlexRow">
                <div className="FlexRow" style={{gap: '3vw'}}>
                    <CheckBtnCircle isDone ={isDone} setIsDone={setIsDone} />
                    <h2>{categoryName}</h2>
                </div>
                {isOpen? <FaChevronUp onClick={() => {setIsOpen(!isOpen)}}/> : <FaChevronDown onClick={() => {setIsOpen(!isOpen)}}/> }
            </div>
            {isOpen ? 
                <div className = "MiddleContents" > 
                {imageUrl=='' && fileInput==null ?
                    <div>
                        <input
                            type="file"
                            ref= {fileInputRef}
                            name='images'
                            onChange={(e) => onSelectFile(e)}
                            style={{display:'none'}}
                            accept=".png, .jpg, image/*"
                        />
                        <div className="RoundCenter" onClick={handleClick} style={{height: '10vh', width: '10vh', backgroundColor: 'white'}}>
                            <FaCamera size={'60%'} color="#E5E5E5"/>
                        </div>
                    </div>
                    :
                    <img src={fileInput} style={{overflow:'auto', maxHeight:'20vh', maxWidth: '70vw'}}/>
                            
                    }
                
                <textarea
                    className="ContentsTextArea"
                    ref={textAreaRef}
                    value={contentsText}
                    onChange={(e) => setContentsText(e.target.value)}
                    placeholder={"More info"}
                    />
                </div>
            : undefined}
        </div>
    );
}

function LargeCategoryWrapper({category, categoryList, contents} : {category: string, categoryList: Category[], contents: Content[]}){
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

    console.log(curDiary)
    return(
        <div>
            <div className="BoxL" style={{paddingBottom: '1vh'}}>
                <DateBox date={new Date()} needSave={true}/>
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
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}