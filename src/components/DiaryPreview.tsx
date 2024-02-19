import { useNavigate } from "react-router-dom";
import { ReactionRow } from "./ReactionRow";
import { UserProfile } from "../components/UserProfile";
import { MidCategoryTile } from "./MidCategoryTile";

export function DiaryPreview() {
    const navigate = useNavigate();

    return (
        <div className="BoxL" style={{ padding: '3vw' }}>
                <div onClick={() => { navigate('/feedDetail') }}>
                    <UserProfile user={{
                        id: "name",
                        description: "illness",
                        profileImgSrc: "picture",
                    }} />
                    <h2>Category</h2>
                    <MidCategoryTile title="Middle Category1" color="#fff" />
                    <MidCategoryTile title="Middle Category2" color="#fff" />
                </div>
            <ReactionRow reactions={{ thumb: 0, check: 0, like: 0 }} clickable={true} />
        </div>
    );
}