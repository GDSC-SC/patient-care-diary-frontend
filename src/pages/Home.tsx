import { MainLayout } from "../components/layout/MainLayout";
import '../styles/pages/Home.css';
import '../styles/components/Round.css';
import '../styles/components/Box.css';
import 'autosize';
import { useEffect, useState } from "react";
import { Authentication } from "../services/Authentication";
import { DiaryApi } from "../services/api/DiaryApi";
import { DiaryInput } from "../components/DiaryInput";
import { CategoryApi } from "../services/api/CategoryApi";
import { categoryApi, contentApi, diaryApi } from "../services/api";

// 본 화면은 로그인 후 처음으로 접근하는 화면입니다.
// 기능 : 기록.
export function Home(){
    const [loading, setLoading] = useState<boolean>(true);
    const [diary, setDiary] = useState<any>();
    const [categorys, setCategorys] = useState<any>();

    useEffect(() => {
        const auth = new Authentication();
        if(!auth.isLoggedIn()) {
            auth.login();
        }
    }, []);

    useEffect(() => {
        const fetchCategorys = async () => {
            return await categoryApi.my();
        }
        const fetchDiary = async () => {   
            const today = new Date();
            try {
                return await diaryApi.getDiaryByDate(today);
            } catch (error) {
                if ((error as any).response && (error as any).response.status === 404) {
                    console.log("Diary not found, creating one");
                    await diaryApi.create({date:today, categoryLists: await fetchCategorys()});

                    console.log(`Diary created for ${today}`);
                    return await diaryApi.getDiaryByDate(today);
                }
            }
        };
        
        const fetchAll = async () => {
            const diary = await fetchDiary();
            const categorys = await fetchCategorys();
            setDiary(diary);
            setCategorys(categorys);
            setLoading(false);
        }
        fetchAll();
    }, []);

    return (
        <MainLayout>
            {loading ? <div>Loading...</div> : (
                <div>
                    <DiaryInput diaryId={diary.id} date={diary.date} emojis={diary.diaryEmojis} contents={diary.contents}
                    categorys={categorys} myEmojiState={diary.myEmojiState}/>
                </div>
            )}
        </MainLayout>
    );
}