import { Button, Footer, calcs } from "grommet";
import {Archive, HomeRounded } from "grommet-icons";
import {FaUser} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

const BottomFooter = () => {
    const navigator = useNavigate();
    return(
        <Footer className="Footer">
            <Button icon={<Archive/>} onClick={() => {navigator('/communityHome')}}></Button>
            <Button icon={<HomeRounded/>} onClick={() => {navigator('/')}}></Button>
            <Button icon={<FaUser/>} onClick={() => {navigator('/myPage')}}></Button>
        </Footer>
    )
}

export default BottomFooter;