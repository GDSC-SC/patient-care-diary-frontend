import { Button, Footer, calcs } from "grommet";
import {Archive, HomeRounded } from "grommet-icons";
import {FaUser} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

const BottomFooter = () => {
    const navigator = useNavigate();
    return(
        <Footer className="Footer">
            <Button icon={<Archive/>} onClick={() => {navigator('/CommunityFeed')}}></Button>
            <Button icon={<HomeRounded/>} onClick={() => {}}></Button>
            <Button icon={<FaUser/>} onClick={() => {}}></Button>
        </Footer>
    )
}

export default BottomFooter;