import { useEffect, useState } from "react";
import { DiaryPreview, DiaryPreviewProps } from "../components/DiaryPreview";
import { MainLayout } from "../components/layout/MainLayout";
import { DiaryApi } from "../services/api/DiaryApi";

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
            {loading ? <div>Loading...</div> : 
                diarys.map((diary:DiaryPreviewProps) => {
                    return <DiaryPreview categories={diary.categories} date={diary.date} diaryEmojis={diary.diaryEmojis}
                        id={diary.id} member={{
                        name: diary.member.name,
                        email: diary.member.email,
                        picture: diary.member.picture,
                    }}  />
                })
            }
        </MainLayout>
    );
}