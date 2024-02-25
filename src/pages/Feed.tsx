import { useEffect, useState } from "react";
import { DiaryPreview, DiaryPreviewProps } from "../components/DiaryPreview";
import { MainLayout } from "../components/layout/MainLayout";
import { DiaryApi } from "../services/api/DiaryApi";

export function Feed() {
    const [diarys, setDiarys] = useState<any>(null);
    useEffect(() => {
        const fetchDiarys = async () => {
            const diaryApi = new DiaryApi();
            const diarys = await diaryApi.all();
            setDiarys(diarys);
        }
        fetchDiarys();
    }, []);
    return (
        <MainLayout>
            {diarys!==null &&
                diarys.map((diary:DiaryPreviewProps) => {
                    return <DiaryPreview diaryPreviewProps={diary}/>
                })
            }
        </MainLayout>
    );
}