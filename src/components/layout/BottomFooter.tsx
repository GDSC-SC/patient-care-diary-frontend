import { Button, Footer, calcs } from "grommet";
import {Archive, HomeRounded } from "grommet-icons";
import {FaUser} from 'react-icons/fa'

const BottomFooter = () => {
    return(
        <Footer className="Footer">
            <Button icon={<Archive/>} onClick={() => {}}></Button>
            <Button icon={<HomeRounded/>} onClick={() => {}}></Button>
            <Button icon={<FaUser/>} onClick={() => {}}></Button>
        </Footer>
    )
}

export default BottomFooter;