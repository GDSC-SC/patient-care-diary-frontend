import { useEffect, useState } from "react";
import { DiaryPreview, DiaryPreviewProps } from "../components/DiaryPreview";
import { MainLayout } from "../components/layout/MainLayout";
import { DiaryApi } from "../services/api/DiaryApi";
import { Loading } from "../components/Loading";

export function Feed() {
    const [loading, setLoading] = useState<boolean>(true);
    const [diarys, setDiarys] = useState<any>();
    useEffect(() => {
        const fetchDiarys = async () => {
            const diaryApi = new DiaryApi();
            const diarys = await diaryApi.all();
            setDiarys(diarys.reverse());
            setLoading(false);
        }
        fetchDiarys();
    }, []);
    return (
        <MainLayout>
            {loading ? <Loading/> :
                diarys.map((diary:DiaryPreviewProps) => {
                    return <DiaryPreview diaryPreviewProps={diary}/>
                })
            }
        </MainLayout>
    );
}