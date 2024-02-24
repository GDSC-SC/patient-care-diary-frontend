import { Content } from "../pages/FeedDetail";
import { classifyByCategoryCode } from "../utils/manageCategory";
import { MidCategoryTile } from "./MidCategoryTile";

function LargeCategoryWrapper({category, contents} : {category: string, contents: Content[]}){
    return (
        <div className="FlexColumn">
            <h3>{category}</h3>
            {contents.map((content:Content) => {
                //content.done 반영하기
                return (
                    <div style={{padding:'1vh 0'}}>
                        <MidCategoryTile title={content.midCategory} color={content.done? content.color:'lightgrey'}/>
                        <div className="FlexColumn" style={{padding: '1vh 3vw'}}>
                            {
                                content.photoUrl!=='' && 
                                <img src={content.photoUrl} alt='' style={{overflow:'auto', maxHeight: '30vh',maxWidth:'70vw'}}/>
                            }
                            <div>
                                <p>{content.text}</p>
                            </div>
                        </div>
                    </div>
                    );
            })}
        </div>
    );
}

export function DiaryView({ contents }: { contents : Content[] }) {
    const contentsClassifiedByCategory:Content[][] = classifyByCategoryCode(contents);
    console.log(contents);
    return (
        <div className="BoxL" style={{ padding: '3vw' }}>
            {contentsClassifiedByCategory.map((contents:Content[]) => {
                console.log(contents);
                if (contents.length === 0) return null;
                
                return (
                    <LargeCategoryWrapper
                        category={contents[0].category}
                        contents={contents}
                    />
                );
            })}
        </div>
    );
}