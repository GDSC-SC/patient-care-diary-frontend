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
import { diaryApi } from "../services/api";
import { EmojiBox } from "../components/EmojiBox";

export function MyPage(){
    useEffect(() => {
        const auth = new Authentication();
        if(!auth.isLoggedIn()) {
            auth.login();
        }
    }, []);

    const [loading, setLoading] = useState<boolean>(true);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [diary, setDiary] = useState<any>(null);
    //const [user, setUser] = useState<any>();
    useEffect(() => {
        const fetchUser = async () => {
            // const user = await diaryApi.getUser();
            // setUser(user);
            setLoading(false);}
        fetchUser();
    }, []);

    useEffect(()=>{
        const fetchDiary = async () => {
            try{
                setDiary(await diaryApi.getDiaryByDate(selectedDate));
            }catch(error){
                if ((error as any).response && (error as any).response.status === 404) {
                    setDiary(null)
                }
            }
        }
        fetchDiary();
    }, [selectedDate]);
    
    const navigate = useNavigate();
    return(
        <MainLayout>
            {loading ? <div>Loading...</div> : (
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
                {diary === null ? <div className="BoxL" style={{textAlign: "center"}}> no diary </div> :
                <div>
                    <div className="BoxL">
                        <EmojiBox diaryId={diary.id} emojis={diary.diaryEmojis} myEmojiState={diary.myEmojiState}/>
                    </div>
                    <DiaryView contents={diary.contents}/>
                </div>}
            </div>)}
        </MainLayout>
    );
}