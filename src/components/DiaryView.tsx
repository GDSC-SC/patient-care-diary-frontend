import { FeedListDetail } from "../components/CategoryBox";
import { Content } from "../pages/FeedDetail";

export function DiaryView({ contents }: { contents : Content[] }) {
    console.log(contents);
    return (
        <div>
            <FeedListDetail largeCategoryList={['Large Category1', 'LargeCategory2']} />
        </div>
    );
}