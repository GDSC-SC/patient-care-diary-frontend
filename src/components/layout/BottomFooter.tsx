import { Button, Footer } from "grommet";
import {Archive, HomeRounded } from "grommet-icons";
import {FaRegUser, FaUser} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

const BottomFooter = () => {
    const navigator = useNavigate();
    return(
        <Footer className="Footer"> 
            <Button icon={<Archive color="#666666" style={{width:'5vw', height:'5vw'}}/>} onClick={() => {navigator('/feed')}}></Button>
            <Button icon={<HomeRounded color="#666666" style={{width:'5vw', height:'5vw'}}/>} onClick={() => {navigator('/home')}}></Button>
            <Button icon={<FaRegUser color="#666666" style={{width:'5vw', height:'5vw'}}/>} onClick={() => {navigator('/myPage')}}></Button>
        </Footer>
    )
}

export default BottomFooter;