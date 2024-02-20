import { FaCamera, FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { DateBox } from "./DateBox";
import { ReactionRow } from "./ReactionRow";
import { useEffect, useRef, useState } from "react";
import autosize from "autosize";

function CheckBtnCircle({isDone, setIsDone}: {isDone: boolean, setIsDone: React.Dispatch<React.SetStateAction<boolean>>}){
    return(
        <div className="RoundCenter" style={{width: '3vh', height: '3vh', backgroundColor: isDone? 'grey' : '#E5E5E5'}} onClick={() => (setIsDone(!isDone))}>
                {isDone? <FaCheck color="white"/>: null}
        </div>
    );
};

function MidCategoryInput({categoryName, categoryId, color}: {categoryName: string, categoryId: number, color: string}) {
    const [isDone, setIsDone] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [imgSrc, setImgSrc] = useState<string>('');
    // middle contents의 text 부분.
    const [contentsText, setContentsText] = useState<string>('');
    // contentsText의 textArea 높이 조절용 ref
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if(textAreaRef) {
            autosize(textAreaRef.current as HTMLTextAreaElement);
        }
    });
    
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
                <div className="RoundCenter" style={{height: '10vh', width: '10vh', backgroundColor: '#E5E5E5'}}>
                    <FaCamera style={{color: 'white'}} size={50} onClick={()=>{
                        
                    }}/>
                    </div>
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

interface Category {
    category: string;
    categoryCode: string;
    color: string;
    id: number;
    midCategory: string;
    visible: boolean;
}

function LargeCategoryWrapper({category, categoryList} : {category: string, categoryList: Category[]}){
    return(
        <div className="BoxL" style={{padding: '3vw'}}>
            <h2>{category}</h2>
            {categoryList.map((midCategory) => {
                return(
                    <MidCategoryInput categoryName={midCategory.midCategory} categoryId={midCategory.id} color={midCategory.color}/>
                )
            })}
        </div>
    );
}

export function DiaryInput({diaryId, date, emojis, contents, categorys}
        : {diaryId: number, date: number[], emojis: {emoji:string, count:number}[], contents: JSON[], categorys: Category[]}) {
    //console.log(diaryId, date, emojis, contents)

    function classifyByCategoryCode(data: Category[]) {
        const C001 = data.filter(item => item.categoryCode === 'C001');
        const C002 = data.filter(item => item.categoryCode === 'C002');
        const C003 = data.filter(item => item.categoryCode === 'C003');
        const C004 = data.filter(item => item.categoryCode === 'C004');
        const C005 = data.filter(item => item.categoryCode === 'C005');
        return [C001, C002, C003, C004, C005];
    }
    const classifiedCategorys:Category[][] = classifyByCategoryCode(categorys);

    return(
        <div>
            <div className="BoxL" style={{paddingBottom: '1vh'}}>
                <DateBox date={new Date(date[0], date[1], date[2])} needSave={true} />
                <ReactionRow reactions={emojis} clickable={false}/>
            </div>
            <div className = "FlexColumn" style={{height: '100vh', overflow:'scroll'}}>
                {
                    classifiedCategorys.map((categoryList:Category[]) => {
                        if (categoryList.length === 0) return null;
                        return (
                            <LargeCategoryWrapper
                                category={categoryList[0].category}
                                categoryList={categoryList}
                            />
                        );
                    })
                    
                }
            </div>
        </div>
    );
}