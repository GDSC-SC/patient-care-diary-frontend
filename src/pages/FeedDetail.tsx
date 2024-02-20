import { useParams } from "react-router-dom";
import { DateBox } from "../components/DateBox";
import { DiaryView } from "../components/DiaryView";
import { ReactionRow } from "../components/ReactionRow";
import { UserProfile } from "../components/UserProfile";
import { MainLayout } from "../components/layout/MainLayout";
import { useEffect, useState } from "react";
import { DiaryApi } from "../services/api/DiaryApi";

export interface Content {
    category: string,
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
        diaryEmojis: {emoji:string, count:number}[],
        contents: Content[],
        name: string,
        // member: {
        //     name: string,
        //     email: string,
        //     picture: string,
        // }
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
                        <UserProfile user={{
                            id: diary.name,
                            description: 'description',
                            profileImgSrc: 'https://previews.123rf.com/images/estherpoon/estherpoon1706/estherpoon170600035/80108153-%EB%A1%9C%EB%94%A9-%EC%95%84%EC%9D%B4%EC%BD%98.jpg'}} />
                        <ReactionRow reactions={diary.diaryEmojis} clickable={true} />
                    </div>
                </div>
                <DiaryView contents = {diary.contents}/>
            </div>
            }
        </MainLayout>
    );
}