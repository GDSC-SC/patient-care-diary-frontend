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

// const [loading, setLoading] = useState<boolean>(true);
// const [categories, setCategories] = useState<JSON[]>([]);

// useEffect(() => {
//     const auth = new Authentication();
//     if(!auth.isLoggedIn()) {
//         auth.login();
//     }
// }, []);

// useEffect(() => {
//     const categoryapi = new CategoryApi();
//     const fetchData = async () => {
//         const res = await categoryapi.my();
//         setCategories(res);
//         setLoading(false);
//     };
//     fetchData();
// }, []);


export function MyCategory(){
    const [largeCategoryList, setLargeCategoryList] = useState<Array<LargeCategory>>();
    const [largeCategory, setLargeCategory] = useState<LargeCategory>();

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
                    <ColorSelector/>
                </div>
            </div>
        </MainLayout>
    );
}