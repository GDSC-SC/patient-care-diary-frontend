import { useEffect, useState } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import '../styles/pages/MyCategory.css'
import { ColorSelector } from "../components/ColorSelector";
import { Category, classifyByCategoryCode } from "../utils/manageCategory";
import { categoryApi } from "../services/api";
import { MidCategoryTile } from "../components/MidCategoryTile";
import { FaChevronDown, FaChevronUp, FaEllipsisH } from "react-icons/fa";
import { Modal } from "../components/Modal";
import { Loading } from "../components/Loading";
import { ToastContainer, toast } from 'react-toastify';

function EditorBtn({title, clickHandler}: {title: string, clickHandler:()=>void}){
    return(
        <div className="EditorBtn" onClick={clickHandler}>
            <p>{title}</p>
        </div>
    )
}

function CategoryEditor({selectedCategory, editorClose, setSelectedMCategory}: {selectedCategory?: Category, editorClose: ()=>void, setSelectedMCategory: ()=>void}){
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>();
    const [isColorOpen, setIsColorOpen] = useState<boolean>();
    const [category, setCategory] = useState<string>();
    const [categoryCode, setCategoryCode] = useState<string>();
    const [midCategory, setMidCategory] = useState<string>();
    const [color, setColor] = useState<string>();
    const categoryList = ["Food", "Medicine" ,"Today Diary", "Exercise", "About Illness"];

    async function firstSet() {
        if(selectedCategory?.id){
            setCategory(selectedCategory?.category || '');
            setCategoryCode(selectedCategory?.categoryCode || '');
            setMidCategory(selectedCategory?.midCategory || '');
            setColor(selectedCategory?.color || '#F7C0BE');
        }
        else{ // Category ADD의 경우. ADD 후에 Form 초기화를 위해 따로 작성.
            setCategory('');
            setCategoryCode('');
            setMidCategory('');
            setColor('#F7C0BE');
        }
        setIsColorOpen(false);
        setIsMenuOpen(false);
    }

    function afterAction(){
        setSelectedMCategory();
        editorClose();
    }

    useEffect(()=>{
        firstSet();
    },[selectedCategory]);

    return(
        <div className="CategoryEditor">
            <div className="FlexColumn" style={{alignItems:'center'}}>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className="InputBox">
                        <div className="FlexRow" style={{}}>
                            <div><p style={{color: isMenuOpen? "grey":"black"}}>{category!==''&&category!=null? category : 'Main Category'}</p></div>
                            {isMenuOpen? <FaChevronUp/>:<FaChevronDown/>}
                        </div>
                        {isMenuOpen?
                        <>
                            {categoryList.map((c, index)=>{
                                return(
                                    <div style={{width: '100%', paddingTop:'1vh'}} onClick={()=>{setCategory(c); setCategoryCode(`C00${index+1}`); setIsMenuOpen(false);}}><p>{c}</p></div>
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
                            style={{borderBottom:'none'}}
                            placeholder={"Middle Category"}
                        />
                    </div>
                <div className="InputBox">
                    <div className="FlexColumn" onClick={() => {setIsColorOpen(!isColorOpen)}}>
                        <div className="FlexRow" style={{}}>
                        <p>Color</p>
                        <div style={{borderRadius:'100%', backgroundColor: color, width: '7vw', height: '7vw'}}/>
                        </div>
                    </div>
                    {isColorOpen? <div style={{paddingTop:'4vw',}}><ColorSelector selectedColor={color} onColorChange={(c)=>setColor(c)}/></div>:<></>}
                </div>
                <div className="FlexRow" style={{width:'max-content', padding:'3vw'}}>
                    <EditorBtn title={"Save"} clickHandler={async ()=>{
                            if(categoryCode === '') {
                                toast("please select category");
                                console.log("categoryCode is null")
                            } else if (midCategory === '') {
                                toast("please input middle category"); 
                                console.log("midCategory is null")
                            } else {
                                if (selectedCategory?.id)
                                    await categoryApi.modify({categoryId: selectedCategory?.id, categoryCode: categoryCode!, subtitle: midCategory!, color: color!});
                                else{
                                    await categoryApi.create({categoryCode: categoryCode!, subtitle: midCategory!, color: color!});
                                    await firstSet();
                                }
                                afterAction();
                            }
                        }}/>
                    {selectedCategory?.id && <EditorBtn title={"Delete"} clickHandler={async ()=>{
                        if(selectedCategory?.id)
                            await categoryApi.delete({categoryId:selectedCategory.id});
                            afterAction();
                        }}/>}
                    <EditorBtn title={"Close"} clickHandler={()=>{
                        afterAction();
                    }}/>
                </div>
            </div>
        </div>
    )
}


export function MyCategory(){
    const [selectedMCategory, setSelectedMCategory] = useState<Category|undefined>();
    const [classifiedCategorys, setClassifiedCategorys] = useState<Category[][]>();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isChanged, setIsChanged] = useState<boolean>(false);
    async function firstSet(){
        const categories = await categoryApi.my();
        setClassifiedCategorys(classifyByCategoryCode(categories));
        setIsChanged(!isChanged);
        setIsLoading(false);
    }
    
    useEffect(() =>{
        firstSet();
    }, [selectedMCategory, isChanged]);


    return(
        <MainLayout> 
            {isLoading? <Loading/> :
            <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="FlexColumn">
            <div className="BoxL">
                <div className="FlexRow">
                    <h2>My Category</h2>
                </div>
            </div>
            <div>
                    {classifiedCategorys?.map((category: Category[])=>{
                        if(category.length!==0)
                            return(
                                <div className="FlexColumn" style={{margin:'6vw'}} key={category[0]?.categoryCode}>
                                    <h3>{category[0]?.category}</h3>
                                    <div style={{margin:'0 3vw'}}>
                                        {category.map((c)=>{
                                            return(
                                                <div className="FlexRow" style={{margin: '1vw 0'}} key={c.id}>
                                                    <MidCategoryTile title={c.midCategory} color={c.color}/>
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
            <div style={{display:'flex', justifyContent:'center'}}>
                <EditorBtn title={"ADD"} clickHandler={()=>{
                    setSelectedMCategory(undefined);
                    setIsOpen(true);
                }}/>
            </div>
            <Modal isOpen={isOpen} closeModal={()=>{setIsOpen(false);}}>
                <div>
                    <CategoryEditor selectedCategory={selectedMCategory} editorClose={() => setIsOpen(false)} setSelectedMCategory={()=> {setSelectedMCategory(undefined)}}/>
                </div>
            </Modal>
        </div>
            </div>
            }
        </MainLayout>
    );
}