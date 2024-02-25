import { MainLayout } from "../components/layout/MainLayout";
import '../styles/pages/Home.css';
import '../styles/components/Round.css';
import '../styles/components/Box.css';
import 'autosize';
import { useEffect, useState } from "react";
import { Diary, DiaryInput } from "../components/DiaryInput";
import { categoryApi, diaryApi } from "../services/api";
import { Loading } from "../components/Loading";
import { useParams } from "react-router-dom";

// 본 화면은 로그인 후 처음으로 접근하는 화면입니다.
// 기능 : 기록.
export function Home() {
    const [loading, setLoading] = useState<boolean>(true);
    const [diary, setDiary] = useState<Diary|null>(null);
    const [categorys, setCategorys] = useState<any>();

    function transformDiaryData(diaryData: any): Diary {
        return {
            id: diaryData.id,
            date: diaryData.date,
            contents: diaryData.contents,
        };
    }
    const { date } = useParams(); //YYYYMMDD

    useEffect(() => {
        const fetchDiary = async () => {   
            try {
                return await diaryApi.getByDate(date!);
            } catch (error) {
                if ((error as any).response && (error as any).response.status === 404) {
                    console.log("Diary not found");
                    return null;
                }
            }
        };
        
        const fetchAll = async () => {
            setCategorys(await categoryApi.my());
            const diary = await fetchDiary();
            if (diary !== null) {
                setDiary(transformDiaryData(diary));
            }
            setLoading(false);
        }

        fetchAll();
    }, []);

    return (
        <MainLayout>
            {loading ? <Loading/> : 
                <DiaryInput date={date!} curDiary={diary} categorys={categorys}/>
            }
        </MainLayout>
    );
        }