import '../styles/components/Box.css'
import { MidCategoryTile } from "./MidCategoryTile";


function middleCategoryPropsSample(title:string){
    return(
        {id: '1',
        title: title,
        photoSrc: '',
        text: 'descriptions....',
        isDone: true,
        color: '#bbb',}
    );
    
}

// LargeCategory function의 props
interface LargeCategoryProps{
    items: {category_id: string, title: string, subTitle: string[], color: string}
}
interface LargeCategoryListProps{
    largeCategoryList: string[];
};
// MiddleCategory function의 props
interface MiddleCategoryProps{
    items : {id: string,
    title: string,
    photoSrc: string|undefined,
    text: string|undefined,
    isDone: boolean|undefined,
    color: string,}
}

export function FeedMiddleCategory (props: MiddleCategoryProps){
    const items = props.items;

    return(
        <div className="FlexColumn" style={{padding: '2vw'}}>
            <div style={{paddingBottom: '1vw'}}>
            <MidCategoryTile title={items.title} color={items.color}/>
            </div>
            {
                items.photoSrc!=''?
                    <img src={items.photoSrc} alt=''/>
                    :
                    <></>
            }
            <div>
                {items.text}
            </div>
        </div>
    );
}

export function FeedLargeCategory(props: LargeCategoryProps){
    return(
        <div className="FlexColumn">
            <h3>{props.items.title}</h3>
            {props.items.subTitle.map((subtitle) =>{
                return(
                    <FeedMiddleCategory items={middleCategoryPropsSample(subtitle)} />
                );
            })}
        </div>
    )
}
export function FeedListDetail(props: LargeCategoryListProps){
    return(
        <div>
            {props.largeCategoryList.map((largeCategory) => 
                <div className="BoxL" style={{padding: '3vw'}}>
                <FeedLargeCategory items={{
                    category_id: '1',
                    title: largeCategory,
                    subTitle:['Middle Category 1', 'Middle Category2',],
                    color:'#fff' }}/>
                </div>
            )}
        </div>
    );
}