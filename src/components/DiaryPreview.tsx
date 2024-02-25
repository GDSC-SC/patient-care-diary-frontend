import { useNavigate } from "react-router-dom";
import { EmojiBox } from "./EmojiBox";
import { MemberProfile } from "./MemberProfile";
import { MidCategoryTile } from "./MidCategoryTile";
import { Category, classifyByCategoryCode } from "../utils/manageCategory";
import { MemberType } from "../services/api/MemberApi";

function LargeCategoryWrapper({category, categoryList} : {category: string, categoryList: Category[]}){
    return (
        <div className="FlexColumn" >
            <h3>{category}</h3>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems:'flex-start', gap:'1vw'}}>
            {categoryList.map((midCategory) => {
                if (midCategory.visible)
                    return(
                        <MidCategoryTile title={midCategory.midCategory} color={midCategory.color}/>
                    )
            })}
            </div>
        </div>
    );
}

export interface DiaryPreviewProps{
    categories: Category[],
    date: number[],
    id: number,
    member: MemberType,
}

export function DiaryPreview ({diaryPreviewProps, setWaitingEmojiBoxCnt}
    : {diaryPreviewProps:DiaryPreviewProps, setWaitingEmojiBoxCnt:React.Dispatch<React.SetStateAction<number>>}){
    const navigate = useNavigate();
    const classifiedCategorys:Category[][] = classifyByCategoryCode(diaryPreviewProps.categories);

    return (
        <div className="BoxL" style={{ padding: '3vw' }}>
                <div onClick={() => { navigate(`/feedDetail/${diaryPreviewProps.id}`) }}>
                    <MemberProfile member={diaryPreviewProps.member}  />
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
                <EmojiBox diaryId={diaryPreviewProps.id} setWaitingEmojiBoxCnt={setWaitingEmojiBoxCnt}/>
            </div>
    );
}