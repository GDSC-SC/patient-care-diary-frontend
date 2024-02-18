import { DateBox } from "../components/DateBox";
import { DiaryPreview } from "../components/DiaryPreview";
import { MainLayout } from "../components/layout/MainLayout";

export function Feed() {
    return (
        <MainLayout>
            <div className="BoxL" style={{padding: '3vw'}}>
                <DateBox date={new Date()} needSave={false} />
            </div>
            <DiaryPreview />
            <DiaryPreview />
        </MainLayout>
    );
}