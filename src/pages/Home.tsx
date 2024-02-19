import { MainLayout } from "../components/layout/MainLayout";
import '../styles/pages/Home.css';
import '../styles/components/Round.css';
import '../styles/components/Box.css';
import 'autosize';
import { DateBox } from "../components/DateBox";
import { FeedLargeCategory, FeedMiddleCategory, LargeCategoryList, } from "../components/CategoryBox";
import axios from "axios";


// 본 화면은 로그인 후 처음으로 접근하는 화면입니다.
// 기능 : 기록.
export function Home(){
    const data = {
        categoryId : 1,
    };
    const instance = axios.create();
    instance.interceptors.request.use(async (config) => {
        let token: string | undefined;
        token = ''
      
        config.headers.Authorization = `Bearer ${token}`;
        config.data= {data};
        return config;
    });
    

    axios({
        method: 'get',
        url: 'https://patient-care-diary.fly.dev',
        headers: {Authorization: '' }, 
        data: {
            categoryId : 1,
        }
    });
    
    // instance.get('https://patient-care-diary.fly.dev').then(r => console.log(r));
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
