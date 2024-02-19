import { FeedListDetail } from "../components/CategoryBox";

export function DiaryView(){
    return(
        <div>
            <FeedListDetail largeCategoryList={['Large Category1', 'LargeCategory2']} />
        </div>
    );
}