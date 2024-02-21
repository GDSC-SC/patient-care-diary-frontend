import { useNavigate } from "react-router-dom";
import { EmojiBox } from "./EmojiBox";
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

export function DiaryPreview (diaryPreviewProps: DiaryPreviewProps){
    const navigate = useNavigate();
    const classifiedCategorys:Category[][] = classifyByCategoryCode(diaryPreviewProps.categories);

    return (
        <div className="BoxL" style={{ padding: '3vw' }}>
                <div onClick={() => { navigate(`/feedDetail/${diaryPreviewProps.id}`) }}>
                    <UserProfile user={{
                        id: diaryPreviewProps.member.name,
                        description: diaryPreviewProps.member.email, //TODO change to illness later
                        profileImgSrc: diaryPreviewProps.member.picture,
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
            <EmojiBox diaryId={diaryPreviewProps.id} reactions={diaryPreviewProps.diaryEmojis} clickable={true} />
        </div>
    );
}