import { useNavigate } from "react-router-dom";
import { MemberProfile } from "../components/MemberProfile";
import { MainLayout } from "../components/layout/MainLayout";
import '../styles/components/Box.css'
import { Next } from "grommet-icons";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../styles/pages/MyPage.css';
import { DiaryView } from "../components/DiaryView";
import { diaryApi, memberApi } from "../services/api";
import { EmojiBox } from "../components/EmojiBox";
import { MemberType } from "../services/api/MemberApi";

export function MyPage(){

    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [diary, setDiary] = useState<any>(null);
    const [member, setMember] = useState<MemberType>();
    useEffect(() => {
        const fetchUser = async () => {
            const member = await memberApi.parseMemberData();
            setMember(member);}
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
            {member===undefined ? <div>Loading...</div> : (
            <div className="FlexColumn">
                <div className="BoxL">
                    <div className="FlexRow"  onClick={() =>{navigate('/profilePage')}}>
                        <MemberProfile member={member}/>
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