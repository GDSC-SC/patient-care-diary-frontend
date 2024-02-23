import { useParams } from "react-router-dom";
import { DateBox } from "../components/DateBox";
import { DiaryView } from "../components/DiaryView";
import { EmojiBox } from "../components/EmojiBox";
import { MemberProfile } from "../components/MemberProfile";
import { MainLayout } from "../components/layout/MainLayout";
import { useEffect, useState } from "react";
import { DiaryApi } from "../services/api/DiaryApi";
import { MemberType } from "../services/api/MemberApi";

export interface Content {
    category: string,
    categoryCode: string,
    color: string,
    done: boolean,
    midCategory: string,
    photoUrl: string,
    text: string,
}

export function FeedDetail(){
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [diary, setDiary] = useState<{
        id: number,
        date: number[],
        contents: Content[],
        member: MemberType
    }>();
    useEffect(() => {
        const fetchDiary = async () => {
            const diaryApi = new DiaryApi();
            const diary = await diaryApi.getDiary(Number(id));
            setDiary(diary);
            setLoading(false);
        }
        fetchDiary();
    }, [id]);
    return(
        <MainLayout>
            {loading ? <div>Loading...</div> :
            diary &&
            <div>
                <div className="BoxL">
                    <div className="FlexColumn" style={{padding:'3vw'}}>
                        <DateBox date={new Date(diary.date[0], diary.date[1], diary.date[2])} needSave={false}/>
                        <MemberProfile member={diary.member} />
                        <EmojiBox diaryId={diary.id}/>
                    </div>
                </div>
                <DiaryView contents = {diary.contents}/>
            </div>
            }
        </MainLayout>
    );
}