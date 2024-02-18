import { useNavigate } from "react-router-dom";
import { UserProfile } from "../components/UserProfile";
import { MainLayout } from "../components/layout/MainLayout";
import '../styles/components/Box.css'
import { Next } from "grommet-icons";
import { useState } from "react";
import { FeedListDetail } from "../components/CategoryBox";

type MyPageLargeCategory= {
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
    const [selectedDate, setSelectedDate] = useState<Date>();
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
                {/* 캘린더 컴포넌트 */}
                {selectedDate?
                    <FeedListDetail largeCategoryList={['Large Category1', 'LargeCategory2']} />
                : <></>}
            </div>
        </MainLayout>
    );
}