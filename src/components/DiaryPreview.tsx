import { useNavigate } from "react-router-dom";
import { ReactionRow } from "./ReactionRow";
import { UserProfile } from "../components/UserProfile";
import { MidCategoryTile } from "./MidCategoryTile";
import { Category, classifyByCategoryCode } from "../utils/manageCategory";

function LargeCategoryWrapper({category, categoryList} : {category: string, categoryList: Category[]}){
    return (
        <div className="FlexColumn">
            <h3>{category}</h3>
            {categoryList.map((midCategory) => {
                return(
                    <MidCategoryTile title={midCategory.midCategory} color={midCategory.color}/>
                )
            })}
        </div>
    );
}

export interface DiaryPreviewProps{
    categories: Category[],
    date: number[],
    diaryEmojis: {emoji:string, count:number}[],
    id: number,
    member: {
        name: string,
        email: string,
        picture: string,
    }
}

export function DiaryPreview (props: DiaryPreviewProps){
    const navigate = useNavigate();
    const classifiedCategorys:Category[][] = classifyByCategoryCode(props.categories);

    return (
        <div className="BoxL" style={{ padding: '3vw' }}>
                <div onClick={() => { navigate('/feedDetail') }}>
                    <UserProfile user={{
                        id: props.member.name,
                        description: props.member.email, //TODO change to illness later
                        profileImgSrc: props.member.picture,
                    }} />
                    {classifiedCategorys.map((categoryList:Category[]) => {
                        if (categoryList.length === 0) return null;
                        return (
                            <LargeCategoryWrapper
                                category={categoryList[0].category}
                                categoryList={categoryList}
                            />
                        );
                    })}
                </div>
            <ReactionRow reactions={props.diaryEmojis} clickable={true} />
        </div>
    );
}