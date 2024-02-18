import { useNavigate } from "react-router-dom";
import { FeedListSimple } from "../components/CategoryBox";
import { ReactionBox } from "../components/ReactionBox";
import { UserProfile } from "../components/UserProfile";

export function DiaryPreview(){
    const navigate = useNavigate();
    return(
        <div>
            <div className="BoxL" style={{padding: '3vw'}}>
                <div onClick={() =>{navigate('/communityFeed')}}>
                    <UserProfile user={{
                        id: "아이디",
                        description: '이 부분은 설명입니다.',
                        profileImgSrc: undefined
                    }}/>
                    <FeedListSimple largeCategoryList={['Large Category1', 'Second Category']}/>
                </div>
                
                <div className="FlexRow" style={{marginTop:'1vh'}}>
                        <div style={{flex:1}}/>
                        <div style={{flex: 3}}>
                            <ReactionBox reactions={{thumb:0, check: 0, like: 0}} clickable={true} />
                        </div>
                        <div style={{flex:1}}/>
                </div>
            </div>
        </div>
    );
}