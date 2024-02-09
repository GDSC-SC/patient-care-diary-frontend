import React, { useState } from "react";
import { MainLayout } from "../components/MainLayout";
import { FaCamera, FaCheck, FaCheckCircle, FaChevronDown, FaIcons } from "react-icons/fa";
import { TextArea, TextInput } from "grommet";
import { colors } from "grommet/themes/base";

const roundIconDivLStyle = {
    borderRadius: 50,
    height: 100,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
};

function Box({children}:any){
    return(
        <div style={{height: '10vh', margin:10, borderRadius: 30, backgroundColor: 'white'}}>{children}</div>
    )
}

// 본 화면은 로그인 후 처음으로 접근하는 화면입니다.
// 기능 : 기록.
export function Home(){
    const date = new Date();
    const today = `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`;
    return (
        <MainLayout>
            <div style={{display:'flex', flexDirection: 'column',height: '100vh', backgroundColor: 'green', overflow:'scroll'}}>
                <Box><h1 style={{}}>Dairy of {today}</h1></Box>
                <LargeCategory/>
            </div>
        </MainLayout>
    );
}

function LargeCategory(){
    return(
        <div style={{margin:10, padding: 10,borderRadius: 30, backgroundColor: "grey"}}>
            <h1>Large Category</h1>
            <MiddelCategory/>
        </div>
    );
}

function CheckBtnCircle({isDone, setIsDone}: {isDone: boolean, setIsDone: React.Dispatch<React.SetStateAction<boolean>>}){
    return(
        <div style={{borderRadius: 50, height: 30, width: 30, backgroundColor: isDone? 'grey' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}onClick={() => (setIsDone(!isDone))}>
                {isDone? <FaCheck color="white"/>: null}
                </div>
    );
};

function MiddelCategory(){
    const [isDone, setIsDone] = useState<boolean>(false);
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
                <div style={roundIconDivLStyle}>
                    <FaCamera style={{color: 'white'}} size={50}/>
                    </div>
                <textarea style={{height: '100%', overflow:'auto'}}/>
            </div>
            : undefined}
        </div>
    )
}
