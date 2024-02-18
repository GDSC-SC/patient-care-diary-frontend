import { useState } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { MiddleCategorySmall } from "../components/CategoryBox";
import { More } from "grommet-icons";

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

export function MyCategory(){
    const [largeCategoryList, setLargeCategoryList] = useState<Array<LargeCategory>>();
    const [largeCategory, setLargeCategory] = useState<LargeCategory>();

    return(
        <MainLayout>
            <div className="FlexColumn">
                <div className="BoxL">
                    <div className="FlexRow">
                        <h2>My Category</h2>
                    </div>
                </div>
                <div className="BoxL">
                    <div className="FlexColumn">
                        {largeCategoryList?.map((largeCategory) => {
                            return(
                                <div className="FlexColumn">
                                    <h3>{largeCategory.titleL}</h3>
                                    {largeCategory.middleCategories.map((middleCategory)=>{
                                        return(
                                            <div className="FlexRow">
                                                <MiddleCategorySmall key={middleCategory.id} items={{
                                                    id: '1',
                                                    title: middleCategory.titleM,
                                                    photoSrc: undefined,
                                                    text: undefined,
                                                    isDone: undefined,
                                                    color: undefined
                                                }}/>
                                                <More onClick={()=>{
                                                    
                                                }}/>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <button onClick={()=>{

                    }}>
                        <h2></h2>
                    </button>
                </div>
            </div>
        </MainLayout>
    );
}