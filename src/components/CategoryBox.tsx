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
                    <MiddleCategoryLarge id="1" title={subtitle} photoSrc={undefined} text={undefined} isDone={undefined} color={undefined}/>
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
                <div className="RoundCenter" style={{height: '10vh', width: '10vh', backgroundColor: '#E5E5E5'}}>
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

export function MiddleCategorySmall(props: MiddleCategoryProps){
    return(
        <div className="RoundCenter" style={{borderRadius: '30vw',backgroundColor: props.color||'lightgrey', width:'max-content'}}>
            <p style={{padding: '1vw 3vw', margin:0}}>{props.title}</p>
        </div>
    );
}

export function FeedMiddleCategory (props: MiddleCategoryProps){

    return(
        <div className="FlexColumn" style={{padding: '2vw'}}>
            <div style={{paddingBottom: '1vw'}}>
            <MiddleCategorySmall id={""} title={props.title} photoSrc={undefined} text={undefined} isDone={undefined} color={undefined}/>
            </div>
            {
                props.photoSrc!=''?
                    <img src={props.photoSrc} alt=''/>
                    :
                    <></>
            }
            <div>
                {props.text}
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
                    <FeedMiddleCategory id={""} title={subtitle} photoSrc={'https://t1.daumcdn.net/cfile/tistory/9906804C5FB7337315'} text={'국가는 평생교육을 진흥하여야 한다. 국회는 상호원조 또는 안전보장에 관한 조약, 중요한 국제조직에 관한 조약, 우호통상항해조약, 주권의 제약에 관한 조약, 강화조약, 국가나 국민에게 중대한 재정적 부담을 지우는 조약 또는 입법사항에 관한 조약의 체결·비준에 대한 동의권을 가진다.'} isDone={undefined} color={undefined} />
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
                    subTitle:['Middle Category 1', 'Middle Category2'],
                    color:'#fff' }}/>
                </div>
            )}
        </div>
    );
}

export function FeedListSimple(props: LargeCategoryListProps){
    return(
        <div>
            {props.largeCategoryList.map((largeCategory) => {
                return(
                    <h3>{largeCategory}</h3>
                    
                );
            })}
        </div>
    )
}
