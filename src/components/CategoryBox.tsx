import autosize from "autosize";
import { useEffect, useRef, useState } from "react";
import { FaCamera, FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import '../styles/components/Box.css'
import { MidCategoryTile } from "./MidCategoryTile";

const largeCategoryListSample={
    LargeCategoryList: ['Large category 1', 'Large category 2']
}

function largeCategoryPropsSample(title:string) {
    return(
        {category_id: '1',
    title: title,
    subTitle:['Middle1', 'Middle2', 'Middle3'],
    color:'#fff'}
    );
}

function middleCategoryPropsSample(title:string){
    return(
        {id: '1',
        title: title,
        photoSrc: '',
        text: 'descriptions....',
        isDone: true,
        color: '#bbb',}
    );
    
}

// LargeCategory function의 props
interface LargeCategoryProps{
    items: {category_id: string, title: string, subTitle: string[], color: string}
}
interface LargeCategoryListProps{
    largeCategoryList: string[];
};
// MiddleCategory function의 props
interface MiddleCategoryProps{
    items : {id: string,
    title: string,
    photoSrc: string|undefined,
    text: string|undefined,
    isDone: boolean|undefined,
    color: string,}
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
    return(
        <div className="BoxL" style={{padding: '3vw'}}>
            <h2>{items.title}</h2>
            {items.subTitle.map((subtitle) => {
                return(
                    <MiddleCategoryLarge items={{
                        id: "1",
                        title: subtitle,
                        photoSrc: undefined,
                        text: undefined,
                        isDone: undefined,
                        color: '#fff'
                    }}/>
                )
            })}
        </div>
    );
}

// MiddleCategory의 체크 버튼
function CheckBtnCircle({isDone, setIsDone}: {isDone: boolean, setIsDone: React.Dispatch<React.SetStateAction<boolean>>}){
    return(
        <div className="RoundCenter" style={{width: '3vh', height: '3vh', backgroundColor: isDone? 'grey' : '#E5E5E5'}} onClick={() => (setIsDone(!isDone))}>
                {isDone? <FaCheck color="white"/>: null}
        </div>
    );
};

// subTitle의 컨텐츠를 표시하는 
function MiddleCategoryLarge(props: MiddleCategoryProps){
    const items = props.items;
    // 체크 표시 state. isDone 값이 있으면 isDone 값을 넣고, 값이 없으면 false로 set.
    const [isDone, setIsDone] = useState<boolean>(items.isDone || false);
    // middle component 열림 여부 state
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // contents의 photoSrc 값 저장.
    const [imgSrc, setImgSrc] = useState<string>(items.text || '');
    // middle contents의 text 부분.
    const [contentsText, setContentsText] = useState<string>(items.text || '');
    // contentsText의 textArea 높이 조절용 ref
    const textAreaRef = useRef<HTMLTextAreaElement>(null);


    useEffect(() => {
        if(textAreaRef) {
            autosize(textAreaRef.current as HTMLTextAreaElement);
        }
    }, [textAreaRef.current]);


    return(
        <div className = "BoxM" style={{backgroundColor: items.color||'#fff'}}>
            <div className="FlexRow">
                <div className="FlexRow" style={{gap: '3vw'}}>
                    <CheckBtnCircle isDone ={isDone} setIsDone={setIsDone} />
                    <h2>{items.title}</h2>
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
    )
}

export function FeedMiddleCategory (props: MiddleCategoryProps){
    const items = props.items;

    return(
        <div className="FlexColumn" style={{padding: '2vw'}}>
            <div style={{paddingBottom: '1vw'}}>
            <MidCategoryTile title={items.title} color={items.color}/>
            </div>
            {
                items.photoSrc!=''?
                    <img src={items.photoSrc} alt=''/>
                    :
                    <></>
            }
            <div>
                {items.text}
            </div>
        </div>
    );
}

export function FeedLargeCategory(props: LargeCategoryProps){
    return(
        <div className="FlexColumn">
            <h3>{props.items.title}</h3>
            {props.items.subTitle.map((subtitle) =>{
                return(
                    <FeedMiddleCategory items={middleCategoryPropsSample(subtitle)} />
                );
            })}
        </div>
    )
}
export function FeedListDetail(props: LargeCategoryListProps){
    return(
        <div>
            {props.largeCategoryList.map((largeCategory) => 
                <div className="BoxL" style={{padding: '3vw'}}>
                <FeedLargeCategory items={{
                    category_id: '1',
                    title: largeCategory,
                    subTitle:['Middle Category 1', 'Middle Category2',],
                    color:'#fff' }}/>
                </div>
            )}
        </div>
    );
}