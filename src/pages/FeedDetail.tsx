import { DateBox } from "../components/DateBox";
import { DiaryView } from "../components/DiaryView";
import { ReactionRow } from "../components/ReactionRow";
import { UserProfile } from "../components/UserProfile";
import { MainLayout } from "../components/layout/MainLayout";

export function FeedDetail(){
    return(
        <MainLayout>
            <div className="BoxL">
                <div className="FlexColumn" style={{padding:'3vw'}}>
                    <DateBox date={new Date()} needSave={false}/>
                    <UserProfile user={{
                        id: "아이디",
                        description: '이 부분은 설명 부분입니다.',
                        profileImgSrc: 'https://previews.123rf.com/images/estherpoon/estherpoon1706/estherpoon170600035/80108153-%EB%A1%9C%EB%94%A9-%EC%95%84%EC%9D%B4%EC%BD%98.jpg'}} />
                    <ReactionRow reactions={[]} clickable={true} />
                </div>
            </div>
            <DiaryView/>
        </MainLayout>
    );
}
