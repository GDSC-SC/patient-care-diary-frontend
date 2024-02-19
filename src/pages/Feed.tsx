import { useEffect, useState } from "react";
import { DateBox } from "../components/DateBox";
import { DiaryPreview } from "../components/DiaryPreview";
import { MainLayout } from "../components/layout/MainLayout";
import { mockApiDiarysAll } from "../services/api/apiMocks";

export function Feed() {
    const [diarys, setDiarys] = useState([]);
    useEffect(() => {
        setDiarys(mockApiDiarysAll()); // Call the function
    }, []);
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