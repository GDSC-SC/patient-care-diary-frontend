import { MainLayout } from "../components/layout/MainLayout";
import '../styles/pages/Home.css';
import '../styles/components/Round.css';
import '../styles/components/Box.css';
import 'autosize';
import { DateBox } from "../components/DateBox";
import { LargeCategoryList, MiddleCategorySmall } from "../components/CategoryBox";
import { UserProfile } from "../components/UserProfile";
import { ReactionBox } from "../components/ReactionBox";


// 본 화면은 로그인 후 처음으로 접근하는 화면입니다.
// 기능 : 기록.
export function Home(){
    const date = new Date();
    return (
        <MainLayout>

            <div className = "FlexColumn" style={{height: '100vh', overflow:'scroll'}}>
            <MiddleCategorySmall id={"Middle Category1"} title={"Middle Category1"} photoSrc={undefined} text={undefined} isDone={undefined} color={undefined} />
                <div className="BoxL">
                    <MiddleCategorySmall id={"Middle Category1"} title={"Middle Category1"} photoSrc={undefined} text={undefined} isDone={undefined} color={undefined} />
                </div>
                <div className="BoxL">
                    <div className="FlexColumn" style={{padding:'3vw'}}>
                        <DateBox date={date} needSave={false}/>
                        <UserProfile id={"ID"} description={"info..."} profileImgSrc={undefined} />
                        <div className="FlexRow" style={{marginTop:'1vh'}}>
                            <div style={{flex:1}}/>
                            <div style={{flex: 3}}>
                                <ReactionBox thumb={0} check={0} like={0}/>
                            </div>
                            <div style={{flex:1}}/>
                        </div>
                    </div>
                </div>
                <LargeCategoryList largeCategoryList={['Large Category1', 'LargeCategory2']}/>
            </div>
        </MainLayout>
    );
}
