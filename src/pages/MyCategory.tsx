import { useEffect, useState } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import '../styles/pages/MyCategory.css'
import { ColorSelector } from "../components/ColorSelector";
import { SaveBtn } from "../components/SaveBtn";
import { Category, classifyByCategoryCode } from "../utils/manageCategory";
import { categoryApi } from "../services/api";
import { MidCategoryTile } from "../components/MidCategoryTile";
import { FaChevronDown, FaChevronUp, FaEllipsisH } from "react-icons/fa";
import { Modal } from "../components/Modal";

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

function EditorBtn({title, clickHandler}: {title: string, clickHandler:()=>void}){
    return(
        <div className="EditorBtn" onClick={clickHandler}>
            <p>{title}</p>
        </div>
    )
}

function CategoryEditor({selectedCategory, setIsOpen}: {selectedCategory?: Category, setIsOpen: ()=>void}){
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isColorOpen, setIsColorOpen] = useState<boolean>(false);
    const [category, setCategory] = useState<string>();
    const [categoryCode, setCategoryCode] = useState<string>();
    const categoryList = ["Category1", "Cateogyr2" ,"Cateogyr3", "Cateogyr4", "Catoeyg5"];
    const [midCategory, setMidCategory] = useState<string>();
    const [color, setColor] = useState<string>();

    useEffect(()=>{
        async function firstSet() {
            if (selectedCategory) {
                setCategory(selectedCategory.category || '');
                setCategoryCode(selectedCategory.categoryCode || '');
                setMidCategory(selectedCategory.midCategory || '');
                setColor(selectedCategory.color || '#F7C0BE');
            }
        }
        firstSet();
    },[selectedCategory]);

    return(
        <div className="CategoryEditor">
            <div className="FlexColumn" style={{alignItems:'center'}}>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className="InputBox">
                        <div className="FlexRow" style={{}}>
                            <div><p style={{color: isMenuOpen? "grey":"black"}}>{category!=''||null? category : 'Main Category'}</p></div>
                            {isMenuOpen? <FaChevronUp/>:<FaChevronDown/>}
                        </div>
                        {isMenuOpen?
                        <>
                            {categoryList.map((c)=>{
                                return(
                                    <div style={{width: '100%', paddingTop:'1vh'}} onClick={()=>{setCategory(c); setIsMenuOpen(false);}}><p>{c}</p></div>
                                );
                            })}
                        </>:<></>
                    }
                    </div>
                </div>
                <div className="InputBox">
                        <input
                            value={midCategory}
                            onChange={(e)=>{setMidCategory(e.target.value);}}
                        />
                    </div>
                <div className="InputBox">
                    <div className="FlexColumn" onClick={() => {setIsColorOpen(!isColorOpen)}}>
                        <div className="FlexRow" style={{}}>
                        <p>Color</p>
                        <div style={{borderRadius:'100%', backgroundColor: color, width: '7vw', height: '7vw'}}/>
                        </div>
                        
                        {/* {isColorOpen? <FaChevronUp/>:<FaChevronDown/>} */}
                    </div>
                    {isColorOpen? <div style={{paddingTop:'4vw',}}><ColorSelector selectedColor={color} onColorChange={(c)=>setColor(c)}/></div>:<></>}
                </div>
                <div className="FlexRow" style={{width:'max-content', padding:'3vw'}}>
                    <EditorBtn title={"Save"} clickHandler={()=>{}}/>
                    <EditorBtn title={"Delete"} clickHandler={()=>{}}/>
                    <EditorBtn title={"Close"} clickHandler={setIsOpen}/>
                </div>
            </div>
        </div>
    )
}


export function MyCategory(){
    const [selectedMCategory, setSelectedMCategory] = useState<Category>();
    const [classifiedCategorys, setClassifiedCategorys] = useState<Category[][]>();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    async function firstSet(){
        const categories = await categoryApi.my();
        setClassifiedCategorys(classifyByCategoryCode(categories));
        console.log(classifiedCategorys);
    }
    
    useEffect(() =>{
        firstSet();
    }, [])

    return(
        <MainLayout> 
            <div className="FlexColumn">
                <div className="BoxL">
                    <div className="FlexRow">
                        <h2>My Category</h2>
                        <SaveBtn clickHandler={function (): void {
                            throw new Error("Function not implemented.");
                        }}/>
                    </div>
                </div>
                <div >
                        {classifiedCategorys?.map((category: Category[])=>{
                            if(category.length!=0)
                                return(
                                    <div className="FlexColumn" style={{margin:'6vw'}}>
                                        <h3>{category[0]?.category}</h3>
                                        <div style={{margin:'0 3vw'}}>
                                            {category.map((c)=>{
                                                return(
                                                    <div className="FlexRow" style={{}}>
                                                        <MidCategoryTile title={c.midCategory} color={'#e5e5e5'}/>
                                                        <FaEllipsisH onClick={()=>{
                                                            setSelectedMCategory(c);
                                                            setIsOpen(true);
                                                        }}/>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                        })}
                </div>
                <Modal isOpen={isOpen} closeModal={()=>{setIsOpen(false);}}>
                    <div>
                        <CategoryEditor selectedCategory={selectedMCategory} setIsOpen={()=>setIsOpen(false)}/>

                    </div>
                </Modal>
            </div>
        </MainLayout>
    );
}