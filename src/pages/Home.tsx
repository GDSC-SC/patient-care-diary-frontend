import { MainLayout } from "../components/layout/MainLayout";
import '../styles/pages/Home.css';
import '../styles/components/Round.css';
import '../styles/components/Box.css';
import 'autosize';
import { DateBox } from "../components/DateBox";
import { LargeCategoryList, } from "../components/CategoryBox";
import { useEffect } from "react";
import { Authentication } from "../services/Authentication";

// 본 화면은 로그인 후 처음으로 접근하는 화면입니다.
// 기능 : 기록.
export function Home(){
    useEffect(() => {
        const auth = new Authentication();
        if(!auth.isLoggedIn()) {
            auth.login();
        }
    }, []);

    const date = new Date();
    return (
        <MainLayout>
            <div className="BoxL">
                <DateBox date={new Date()} needSave={true} />
            </div>
            <div className = "FlexColumn" style={{height: '100vh', overflow:'scroll'}}>
                <LargeCategoryList largeCategoryList={['Large Category1', 'Large Category2']}/>
            </div>
        </MainLayout>
    );
}