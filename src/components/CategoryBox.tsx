import autosize from "autosize";
import { useEffect, useRef, useState } from "react";
import { FaCamera, FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";

// LargeCategory function의 props
interface LargeCategoryProps{
    items: {category_id: string, title: string, subTitle: string[], color: string}
}
interface LargeCategoryListProps{
    largeCategoryList: string[];
};
// MiddleCategory function의 props
interface MiddleCategoryProps{
    id: string,
    title: string,
    photoSrc: string|undefined,
    text: string|undefined,
    isDone: boolean|undefined,
    color: string|undefined,
}

export function LargeCategoryList(props: LargeCategoryListProps){
    return(
        <div>
            {props.largeCategoryList.map((largeCategory) => {return (
                <LargeCategory items={{
                    category_id: '1',
                    title: largeCategory,
                    subTitle:['Middle Category 1', 'Middle Category2'],
                    color:'#fff' }}/>);
            })}
        </div>
    );
}

function LargeCategory(props: LargeCategoryProps){
    const items = props.items;
    console.log('라지 카테고리');
    return(
        <div className="BoxL">
            <h1>{items.title}</h1>
            {items.subTitle.map((subtitle) => {
                return(
                    <MiddleCategory id="1" title={subtitle} photoSrc={undefined} text={undefined} isDone={undefined} color={undefined}/>
                )
            })}
        </div>
    );
}

// MiddleCategory의 체크 버튼
function CheckBtnCircle({isDone, setIsDone}: {isDone: boolean, setIsDone: React.Dispatch<React.SetStateAction<boolean>>}){
    return(
        <div className="IconRound" style={{width: '3vh', height: '3vh', backgroundColor: isDone? 'grey' : '#E5E5E5'}} onClick={() => (setIsDone(!isDone))}>
                {isDone? <FaCheck color="white"/>: null}
        </div>
    );
};

// subTitle의 컨텐츠를 표시하는 
function MiddleCategory(props: MiddleCategoryProps){
    // 체크 표시 state. isDone 값이 있으면 isDone 값을 넣고, 값이 없으면 false로 set.
    const [isDone, setIsDone] = useState<boolean>(props.isDone || false);
    // middle component 열림 여부 state
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // contents의 photoSrc 값 저장.
    const [imgSrc, setImgSrc] = useState<string>(props.text || '');
    // middle contents의 text 부분.
    const [contentsText, setContentsText] = useState<string>(props.text || '');
    // contentsText의 textArea 높이 조절용 ref
    const textAreaRef = useRef<HTMLTextAreaElement>(null);


    useEffect(() => {
        if(textAreaRef) {
            autosize(textAreaRef.current as HTMLTextAreaElement);
        }
    }, [textAreaRef.current]);


    return(
        <div className = "BoxM" style={{backgroundColor: props.color||'#fff'}}>
            <div className="FlexRow">
                <CheckBtnCircle isDone ={isDone} setIsDone={setIsDone} />
                <h2>{props.title}</h2>
                {isOpen? <FaChevronUp onClick={() => {setIsOpen(!isOpen)}}/> : <FaChevronDown onClick={() => {setIsOpen(!isOpen)}}/> }
            </div>
            
            {isOpen ? 
                <div className = "MiddleContents" > 
                <div className="IconRound" style={{height: '10vh', width: '10vh', backgroundColor: '#E5E5E5'}}>
                    <FaCamera style={{color: 'white'}} size={50}/>
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
    )
}