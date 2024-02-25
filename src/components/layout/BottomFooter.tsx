import { Button, Footer } from "grommet";
import {Archive, HomeRounded } from "grommet-icons";
import {FaRegUser, FaUser} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

const BottomFooter = () => {
    const navigator = useNavigate();
    return(
        <Footer className="Footer">
            <Button icon={<Archive/>} onClick={() => {navigator('/feed')}}></Button>
            <Button icon={<HomeRounded/>} onClick={() => {navigator('/')}}></Button>
            <Button icon={<FaRegUser/>} onClick={() => {navigator('/myPage')}}></Button>
        </Footer>
    )
}

export default BottomFooter;