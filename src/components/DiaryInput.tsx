import { DateBox } from "./DateBox";
import { ReactionRow } from "./ReactionRow";

function MidCategoryInput({categoryName, categoryId, color}: {categoryName: string, categoryId: number, color: string}) {
    return(
        <div className = "BoxM" style={{backgroundColor: color}}>
            {categoryName}
        </div>
    );
}

interface Category {
    category: string;
    categoryCode: string;
    color: string;
    id: number;
    midCategory: string;
    visible: boolean;
}

function LargeCategoryWrapper({category, categoryList} : {category: string, categoryList: Category[]}){
    console.log(categoryList)
    console.log(category)
    return(
        <div className="BoxL" style={{padding: '3vw'}}>
            <h2>{category}</h2>
            {categoryList.map((midCategory) => {
                return(
                    <MidCategoryInput categoryName={midCategory.midCategory} categoryId={midCategory.id} color={midCategory.color}/>
                )
            })}
        </div>
    );
}

export function DiaryInput({diaryId, date, emojis, contents, categorys}
        : {diaryId: number, date: number[], emojis: {emoji:string, count:number}[], contents: JSON[], categorys: Category[]}) {
    //console.log(diaryId, date, emojis, contents)

    function classifyByCategoryCode(data: Category[]) {
        const C001 = data.filter(item => item.categoryCode === 'C001');
        const C002 = data.filter(item => item.categoryCode === 'C002');
        const C003 = data.filter(item => item.categoryCode === 'C003');
        const C004 = data.filter(item => item.categoryCode === 'C004');
        const C005 = data.filter(item => item.categoryCode === 'C005');
        return [C001, C002, C003, C004, C005];
    }
    const classifiedCategorys:Category[][] = classifyByCategoryCode(categorys);

    return(
        <div>
            <div className="BoxL">
                <DateBox date={new Date(date[0], date[1], date[2])} needSave={true} />
            </div>
            <ReactionRow reactions={emojis} clickable={false} />
            <div className = "FlexColumn" style={{height: '100vh', overflow:'scroll'}}>
                {
                    classifiedCategorys.map((categoryList:Category[]) => {
                        return (
                            <LargeCategoryWrapper
                                category={categoryList[0].category}
                                categoryList={categoryList}
                            />
                        );
                    })
                    
                }
            </div>
        </div>
    );
}