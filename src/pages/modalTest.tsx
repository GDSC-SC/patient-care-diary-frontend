import { Dialog } from "@headlessui/react"
import { Category } from "../utils/manageCategory"
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Modal } from "../components/Modal";



async function CategoryEditDialog({category, isOpen ,setClose}: {category?: Category, isOpen:boolean, setClose: ()=>void}){
    const [mTitle, setMTitle] = useState<string>(category?.midCategory||'');
    const [lTitle, setLTitle] = useState<string>(category?.category||'');
    const [color, setColor] = useState<string>(category?.color||'');

    const largeCategoryList = {
        
    }

    return(
        <Dialog open={isOpen} onClose={()=> setClose()} style={{backgroundColor:'grey', width:'fit-content', borderRadius:'20vw'}}>
            
            <div className="FlexColumn">
                <div className="BoxL">
                    <Dropdown style={{}}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            
                            <div style={{backgroundColor:'lightgrey'}}>aa</div>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="BoxL">
                    <input
                        value={mTitle}
                        onChange={(e)=>{
                            setMTitle(e.target.value);
                        }}
                    />
                </div>
                <div className="BoxL">
                    
                </div>
            </div>
        </Dialog>
    )
}
export function ModalTest(){
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return(<></>
        // <Modal isOpen={true} closeModal={()=>{setIsOpen(false);}}/>
    )
}