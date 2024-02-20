import { MainLayout } from "../components/layout/MainLayout";
import '../styles/pages/Home.css';
import '../styles/components/Round.css';
import '../styles/components/Box.css';
import 'autosize';
import { useEffect, useState } from "react";
import { Authentication } from "../services/Authentication";
import { DiaryApi } from "../services/api/DiaryApi";
import { DiaryInput } from "../components/DiaryInput";

// 본 화면은 로그인 후 처음으로 접근하는 화면입니다.
// 기능 : 기록.
export function Home(){
    const [loading, setLoading] = useState<boolean>(true);
    const [diary, setDiary] = useState<any>();

    useEffect(() => {
        const auth = new Authentication();
        if(!auth.isLoggedIn()) {
            auth.login();
        }
    }, []);

    useEffect(() => {
        const today = new Date();
        const diaryApi = new DiaryApi();
        const getObjectDiary = async () => {
            const diary = await diaryApi.getDiaryByDate(today);
            return diary;
        }

        const fetchData = async () => {
            try {
                return await getObjectDiary();
            } catch (error) {
                if ((error as any).response && (error as any).response.status === 404) {
                    console.log("Diary not found, creating one");
                    await diaryApi.create(today);
                    console.log(`Diary created for ${today}`);
                    return await getObjectDiary();
                } else {
                    // Handle other errors
                }
            }
        };
        fetchData().then((diary)=>{
            setDiary(diary);
            setLoading(false);
        })
    }, []);

    return (
        <MainLayout>
            {loading ? <div>Loading...</div> : (
                <div>
                    <DiaryInput diaryId={diary.id} date={diary.date} emojis={diary.diaryEmojis} contents={diary.contents}/>
                </div>
            )}
        </MainLayout>
    );
}