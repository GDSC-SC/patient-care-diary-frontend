import { FeedListDetail } from "../components/CategoryBox";
import { DateBox } from "../components/DateBox";
import { ReactionBox } from "../components/ReactionBox";
import { UserProfile } from "../components/UserProfile";
import { MainLayout } from "../components/layout/MainLayout";

export function CommunityFeed(){
    return(
        <MainLayout>
            <div className="BoxL">
                <div className="FlexColumn" style={{padding:'3vw'}}>
                    <DateBox date={new Date()} needSave={false}/>
                    <UserProfile user={{
                        id: "아이디",
                        description: '이 부분은 설명 부분입니다.',
                        profileImgSrc: 'https://previews.123rf.com/images/estherpoon/estherpoon1706/estherpoon170600035/80108153-%EB%A1%9C%EB%94%A9-%EC%95%84%EC%9D%B4%EC%BD%98.jpg'}} />
                    <div className="FlexRow" style={{marginTop:'1vh'}}>
                        <div style={{flex:1}}/>
                        <div style={{flex: 3}}>
                            <ReactionBox reactions={{thumb:0, check: 0, like: 0}} clickable={true} />
                        </div>
                        <div style={{flex:1}}/>
                    </div>
                </div>
            </div>
            <FeedListDetail largeCategoryList={['Large Category1', 'LargeCategory2']} />
        </MainLayout>
    );
}
