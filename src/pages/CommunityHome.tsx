import { DateBox } from "../components/DateBox";
import { MainLayout } from "../components/layout/MainLayout";

export function CommunityHome() {
    return (
        <MainLayout>
            <div className="BoxL">
                <DateBox date={new Date()} needSave={false} />
            </div>
        </MainLayout>
    );
}