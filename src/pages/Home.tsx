import React, { useEffect, useRef, useState } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { FaCamera, FaCheck, FaChevronDown, FaChevronUp, FaIcons } from "react-icons/fa";
import '../styles/Home.css';
import '../styles/Icon.css';
import '../styles/Box.css';
import 'autosize';
import autosize from "autosize";
import { DateBox } from "../components/DateBox";

interface LargeCategoryProps{
    items: {category_id: string, title: string, subtitle: string[], color: string}
}
interface LargeCategoryListProps{
    largeCategoryList: string[];
};

// 본 화면은 로그인 후 처음으로 접근하는 화면입니다.
// 기능 : 기록.
export function Home(){
    const date = new Date();
    return (
        <MainLayout>
            <div className = "FlexColumn" style={{height: '100vh', overflow:'scroll'}}>
                <DateBox date={date} needSave={true}/>
                <LargeCategoryList largeCategoryList={['Large Category1', 'LargeCategory2']}/>
            </div>
        </MainLayout>
    );
}

function LargeCategoryList(props: LargeCategoryListProps){
    return(
        <div>
            {props.largeCategoryList.map((largeCategory) => {return (
                <LargeCategory items={{
                    category_id: '1',
                    title: largeCategory,
                    subtitle:['Middle Category 1', 'Middle Category2'],
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
            {items.subtitle.map(() => {
                return(
                    <MiddleCategory />
                )
            })}
        </div>
    );
}

function CheckBtnCircle({isDone, setIsDone}: {isDone: boolean, setIsDone: React.Dispatch<React.SetStateAction<boolean>>}){
    return(
        <div className="IconRound" style={{width: '3vh', height: '3vh', backgroundColor: isDone? 'grey' : '#E5E5E5'}} onClick={() => (setIsDone(!isDone))}>
                {isDone? <FaCheck color="white"/>: null}
        </div>
    );
};

function MiddleCategory(){
    // 체크 표시 state
    const [isDone, setIsDone] = useState<boolean>(false);
    // middle component 열림 여부 state
    const [isOpen, setIsOpen] = useState<boolean>(true);
    // middle contents의 text 부분.
    const [contentsText, setContentsText] = useState<string>('');
    // contentsText의 textArea 높이 조절용 ref
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    
    useEffect(() => {
        if(textAreaRef) {
            autosize(textAreaRef.current as HTMLTextAreaElement);
        }
    }, []);

    return(
        <div className = "BoxM">
            <div className="FlexRow">
                <CheckBtnCircle isDone ={isDone} setIsDone={setIsDone} />
                <h2>Middel category</h2>
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
                    onChange={(e) => {setContentsText(e.target.value);}}
                    placeholder={"More info"}
                    />
            </div>
            : undefined}
        </div>
    )
}
