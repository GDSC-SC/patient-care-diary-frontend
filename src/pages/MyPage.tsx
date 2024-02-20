import { useNavigate } from "react-router-dom";
import { UserProfile } from "../components/UserProfile";
import { MainLayout } from "../components/layout/MainLayout";
import '../styles/components/Box.css'
import { Next } from "grommet-icons";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../styles/pages/MyPage.css';
import { DiaryView } from "../components/DiaryView";
import { Authentication } from "../services/Authentication";

export function MyPage(){
    useEffect(() => {
        const auth = new Authentication();
        if(!auth.isLoggedIn()) {
            auth.login();
        }
    }, []);
    
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
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
                    <Calendar onChange={(value) => setSelectedDate(value as Date)} value={selectedDate} />
                </div>

                {selectedDate? <DiaryView/> : <></>}
            </div>
        </MainLayout>
    );
}