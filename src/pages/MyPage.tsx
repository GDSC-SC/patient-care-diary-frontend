import { useNavigate } from "react-router-dom";
import { MemberProfile } from "../components/MemberProfile";
import { MainLayout } from "../components/layout/MainLayout";
import '../styles/components/Box.css'
import { Next, Trash } from "grommet-icons";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../styles/pages/MyPage.css';
import { DiaryView } from "../components/DiaryView";
import { diaryApi, memberApi } from "../services/api";
import { EmojiBox } from "../components/EmojiBox";
import { MemberType } from "../services/api/MemberApi";
import { MdOutlineModeEditOutline } from "react-icons/md";

export function MyPage(){
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [diary, setDiary] = useState<any>(null);
    const [member, setMember] = useState<MemberType>();
    const [renderCount, setRenderCount] = useState<number>(0);
    useEffect(() => {
        const fetchUser = async () => {
            const member = await memberApi.parseMemberData();
            setMember(member);
        }
        fetchUser();
        
    }, []);

    useEffect(()=>{
        const fetchDiary = async () => {
            try{
                const date = selectedDate;
                setDiary(await diaryApi.getByDate(`${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2, '0')}${(date.getDate()).toString().padStart(2, '0')}`));
            }catch(error){
                if ((error as any).response && (error as any).response.status === 404) {
                    setDiary(null)
                }
            }
        }
        fetchDiary();
    }, [selectedDate, renderCount]);

    useEffect(()=>{
        console.log(diary);
    }, [diary])
    
    const navigate = useNavigate();
    return(
        <MainLayout>
            {member!==undefined &&
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
                    <Calendar onChange={(value) => setSelectedDate(value as Date)} value={selectedDate} locale="en-GB" />
                </div>
                {diary === null ? <div>
                <div className="BoxL" style={{textAlign: "center"}}>
                     no diary
                </div>
                <MdOutlineModeEditOutline style={{margin: '0 auto', display: 'flex'}} onClick={()=>{
                            const date = new Date(selectedDate);
                            navigate(`/home/${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2, '0')}${(date.getDate()).toString().padStart(2, '0')}`)
                        }}/>
                 </div> 
                : <div>
                    <div className="BoxL">
                        <EmojiBox diaryId={diary.id}/>
                    </div>
                    <DiaryView contents={diary.contents}/>
                    <div className="FlexRow" style={{margin: '0 auto', display: 'flex', justifyContent: 'space-around'}}>
                        <Trash onClick={
                            async () => {
                                await diaryApi.delete(diary.id);
                                setRenderCount((prev) => prev + 1);
                            }
                        }/>
                        <MdOutlineModeEditOutline onClick={()=>{
                            const date = new Date(selectedDate);
                            navigate(`/home/${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2, '0')}${(date.getDate()).toString().padStart(2, '0')}`)
                        }}/>
                    </div>
                    
                </div>}
            </div>}
        </MainLayout>
    );
}