import React, { useState } from "react";
import { MainLayout } from "../components/MainLayout";
import { FaCamera, FaCheck, FaCheckCircle, FaChevronDown, FaIcons } from "react-icons/fa";
import '../styles/Home.css'

function Box({children}:any){
    return(
        <div style={{height: '10vh', margin:10, borderRadius: 30, backgroundColor: 'white'}}>{children}</div>
    )
}



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
    const today = `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`;
    return (
        <MainLayout>
            <div style={{display:'flex', flexDirection: 'column',height: '100vh', backgroundColor: 'green', overflow:'scroll'}}>
                {/* <Box><h1 style={{}}>Dairy of {today}</h1></Box> */}
                <LargeCategoryList largeCategoryList={['Large Categ햐ory1', 'LargeCategory2']}/>
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
        <div className="Box" style={{backgroundColor: "grey"}}>
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
        <div className="CheckBtnCircle" style={{backgroundColor: isDone? 'grey' : 'white'}} onClick={() => (setIsDone(!isDone))}>
                {isDone? <FaCheck color="white"/>: null}
        </div>
    );
};

function MiddleCategory(){
    // 체크 표시 state
    const [isDone, setIsDone] = useState<boolean>(false);
    // middle component 열림 여부 state
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return(
        <div style={{display: "flex", flexDirection: 'column',
            margin: 10, padding: 10, borderRadius: 30, backgroundColor: 'lightgray'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
                <CheckBtnCircle isDone ={isDone} setIsDone={setIsDone} />
                <h2>Middel category</h2>
                <FaChevronDown onClick={() => {setIsOpen(!isOpen)}}/>
            </div>
            
            {isOpen ? 
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                <div className="RoundIconDivLStyle">
                    <FaCamera style={{color: 'white'}} size={50}/>
                    </div>
                <textarea style={{height: '100%', overflow:'auto'}}/>
            </div>
            : undefined}
        </div>
    )
}
