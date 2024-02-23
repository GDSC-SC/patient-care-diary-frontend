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


export function MyCategory(){
    const [largeCategoryList, setLargeCategoryList] = useState<Array<LargeCategory>>();
    const [largeCategory, setLargeCategory] = useState<LargeCategory>();
    const [selectedColor, setSelectedColor] = useState<string>();

    function onColorChange(c:string){
        setSelectedColor(c);
        console.log(selectedColor);
    }

    return(
        <MainLayout>
            <div className="FlexColumn">
                <div className="BoxL">
                    <div className="FlexRow">
                        <h2>My Category</h2>
                        <SaveBtn clickHandler={function (): void {
                            throw new Error("Function not implemented.");
                        } }/>
                    </div>
                </div>
                <div className="BoxL">
                </div>
                
                <div className="BoxL">
                    <ColorSelector onColorChange={onColorChange}/>
                </div>
            </div>
        </MainLayout>
    );
}