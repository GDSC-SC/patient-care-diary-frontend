import { MainLayout } from "../components/layout/MainLayout";
import '../styles/pages/Home.css';
import '../styles/components/Round.css';
import '../styles/components/Box.css';
import 'autosize';
import { DateBox } from "../components/DateBox";
import { FeedLargeCategory, FeedMiddleCategory, LargeCategoryList, } from "../components/CategoryBox";
import axios from "axios";
import { CategoryApi } from "../api/CategoryApi";
import { useEffect } from "react";


// 본 화면은 로그인 후 처음으로 접근하는 화면입니다.
// 기능 : 기록.
export function Home(){
    const categoryapi = new CategoryApi();
    useEffect(() =>{
        // categoryapi.my().then((data: any[]) => {
        //     data.map((item: any) => {
        //         console.log(item);
        //     });
        // }).catch((error: any) => {
        //     console.error(error);
        // });

        // categoryapi.create({categoryCode: "C002", subtitle:"testSubtitle", color:"fff"});

        // categoryapi.visible(4);

        // categoryapi.modify({categoryId: 1,categoryCode: "C001", subtitle: "hello", color:'000'});
    },[]);
    
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