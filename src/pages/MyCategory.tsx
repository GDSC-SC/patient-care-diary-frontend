import { useState } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { More } from "grommet-icons";
import { ColorSelector } from "../components/ColorSelector";
import { SaveBtn } from "../components/SaveBtn";

type LargeCategory = {
    id: number,
    titleL: string,
    middleCategories: Array<MiddleCategory>,
}

type MiddleCategory = {
    id : number,
    titleM: string,
    isDone: boolean | false,
    photoUrl: string | undefined,
    description: string | undefined,
    color: string | undefined,
}

// type MiddleCategory = {
//     id: number,
//     categoryCode : string,
//     subtitle : string,
//     color: string,
//     visible: boolean,
// }


export function MyCategory(){
    const [largeCategoryList, setLargeCategoryList] = useState<Array<LargeCategory>>();
    const [largeCategory, setLargeCategory] = useState<LargeCategory>();

    return(
        <MainLayout>
            <div className="FlexColumn">
                <div className="BoxL">
                    <div className="FlexRow">
                        <h2>My Category</h2>
                        <SaveBtn/>
                    </div>
                </div>
                <div className="BoxL">
                </div>
                
                <div className="BoxL">
                    <ColorSelector/>
                </div>
            </div>
        </MainLayout>
    );
}