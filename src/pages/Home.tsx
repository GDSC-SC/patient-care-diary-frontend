import { MainLayout } from "../components/layout/MainLayout";
import '../styles/pages/Home.css';
import '../styles/components/Round.css';
import '../styles/components/Box.css';
import 'autosize';
import { DateBox } from "../components/DateBox";
import { FeedLargeCategory, FeedMiddleCategory, LargeCategoryList, MiddleCategorySmall } from "../components/CategoryBox";
import { UserProfile } from "../components/UserProfile";
import { ReactionBox } from "../components/ReactionBox";


// 본 화면은 로그인 후 처음으로 접근하는 화면입니다.
// 기능 : 기록.
export function Home(){
    const date = new Date();
    return (
        <MainLayout>

            <div className = "FlexColumn" style={{height: '100vh', overflow:'scroll'}}>
                <div className="BoxL">
                    <MiddleCategorySmall id={"Middle Category1"} title={"Middle Category1"} photoSrc={undefined} text={undefined} isDone={undefined} color={undefined} />
                </div>
                <div className="BoxL">
                    <div className="FlexColumn" style={{padding:'3vw'}}>
                        <DateBox date={date} needSave={false}/>
                        <UserProfile id={"ID"} description={"info..."} profileImgSrc={'https://previews.123rf.com/images/estherpoon/estherpoon1706/estherpoon170600035/80108153-%EB%A1%9C%EB%94%A9-%EC%95%84%EC%9D%B4%EC%BD%98.jpg'} />
                        <div className="FlexRow" style={{marginTop:'1vh'}}>
                            <div style={{flex:1}}/>
                            <div style={{flex: 3}}>
                                <ReactionBox thumb={0} check={0} like={0}/>
                            </div>
                            <div style={{flex:1}}/>
                        </div>
                    </div>
                </div>
                <div className="BoxL">
                    <FeedLargeCategory items={{
                        category_id: "1",
                        title: "Large Title",
                        subTitle: ['subTitle1', 'subTitle2'],
                        color: ""
                    }}/>
                </div>
                <LargeCategoryList largeCategoryList={['Large Category1', 'LargeCategory2']}/>
            </div>
        </MainLayout>
    );
}
