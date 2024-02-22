import { FeedListDetail } from "../components/CategoryBox";
import { Content } from "../pages/FeedDetail";
import { Category, classifyByCategoryCode } from "../utils/manageCategory";
import { MidCategoryTile } from "./MidCategoryTile";

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
    const classifiedCategorys:Category[][] = classifyByCategoryCode(props.categories);

    return (
        <div className="BoxL" style={{ padding: '3vw' }}>
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
    );
}

export function DiaryView({ contents }: { contents : Content[] }) {
    console.log(contents);
    return (
        <div>
            <FeedListDetail largeCategoryList={['Large Category1', 'LargeCategory2']} />
        </div>
    );
}