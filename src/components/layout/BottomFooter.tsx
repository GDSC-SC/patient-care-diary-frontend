import { Button, Footer } from "grommet";
import {Archive, HomeRounded } from "grommet-icons";
import {FaRegUser} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

const BottomFooter = () => {
    const navigator = useNavigate();
    
    const date = new Date();
    const today = `${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2, '0')}${(date.getDate()).toString().padStart(2, '0')}`
    return(
        <Footer className="Footer"> 
            <Button icon={<Archive color="#666666" style={{width:'5vw', height:'5vw'}}/>} onClick={() => {navigator('/feed')}}></Button>
            <Button icon={<HomeRounded color="#666666" style={{width:'5vw', height:'5vw'}}/>} onClick={() => {navigator(`/home/${today}`)}}></Button>
            <Button icon={<FaRegUser color="#666666" style={{width:'5vw', height:'5vw'}}/>} onClick={() => {navigator('/myPage')}}></Button>
        </Footer>
    )
}

export default BottomFooter;