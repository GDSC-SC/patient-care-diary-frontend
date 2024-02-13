import { MainLayout } from "../components/layout/MainLayout";
import '../styles/pages/Home.css';
import '../styles/components/Icon.css';
import '../styles/components/Box.css';
import 'autosize';
import { DateBox } from "../components/DateBox";
import { LargeCategoryList } from "../components/CategoryBox";


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
