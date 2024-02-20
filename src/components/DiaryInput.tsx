import { DateBox } from "./DateBox";
import { ReactionRow } from "./ReactionRow";

function MidCategoryInput({categoryName, categoryId}: {categoryName: string, categoryId: number}){
    return(
        <div className = "BoxM" style={{backgroundColor: '#fff'}}>
            
        </div>
    );
}

function LargeCategoryWrapper({largeCategoryTitle, midCategoryList}
    : {largeCategoryTitle: string, midCategoryList: {name: string, id: number}[]}){

    return(
        <div className="BoxL" style={{padding: '3vw'}}>
            <h2>{largeCategoryTitle}</h2>
            {midCategoryList.map((midCategory) => {
                return(
                    <MidCategoryInput categoryName={midCategory.name} categoryId={midCategory.id}/>
                )
            })}
        </div>
    );
}
export function DiaryInput({diaryId, date, emojis, contents}
    : {diaryId: number, date: number[], emojis: {emoji:string, count:number}[], contents: JSON[]}){
    //console.log(diaryId, date, emojis, contents)
    return(
        <div>
            <div className="BoxL">
                <DateBox date={new Date(date[0], date[1], date[2])} needSave={true} />
            </div>
            <ReactionRow reactions={emojis} clickable={false} />
            <div className = "FlexColumn" style={{height: '100vh', overflow:'scroll'}}>
                <LargeCategoryWrapper largeCategoryTitle="Category1" midCategoryList={[{name: "MidCategory1", id: 1}, {name: "MidCategory2", id: 2}]}/>
                <LargeCategoryWrapper largeCategoryTitle="Category2" midCategoryList={[{name: "MidCategory1", id: 3}, {name: "MidCategory2", id: 4}]}/>
            </div>
        </div>
    );
}