import { useNavigate } from "react-router-dom";
import { UserProfile } from "../components/UserProfile";
import { MainLayout } from "../components/layout/MainLayout";
import '../styles/components/Box.css'
import { Next } from "grommet-icons";
import { useState } from "react";
import { FeedListDetail } from "../components/CategoryBox";
// import { Calendar } from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import '../styles/pages/MyPage.css';


type MyPageLargeCategory = {
    id: number,
    titleL : string,
    middleCategories : Array<MyPageMiddleCategory>,
}

type MyPageMiddleCategory = {
    id : number,
    titleM : string,
    color : string,
}

export function MyPage(){
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [categories, setCategories] = useState<MyPageMiddleCategory>();
    return(
        <MainLayout>
            <div className="FlexColumn">
                <div className="BoxL">
                    <div className="FlexRow"  onClick={() =>{navigate('/profile')}}>
                        <UserProfile user={{
                            id: "아이디",
                            description: '설명',
                            profileImgSrc: undefined
                        }}/>
                        <Next/>
                    </div>
                </div>
                <div className="BoxL">
                    <div className="FlexRow" onClick={() =>{navigate('/myCategory')}}>
                        <h2>My Category</h2>
                        <Next/>
                    </div>
                    
                </div>
                <div className="BoxL">
                    {/* <Calendar onChange={(value) => setSelectedDate(value as Date)} value={selectedDate} /> */}
                </div>

                {selectedDate?
                    <FeedListDetail largeCategoryList={['Large Category1', 'LargeCategory2']} />
                : <></>}
            </div>
        </MainLayout>
    );
}