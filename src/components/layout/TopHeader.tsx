import { Button, Header } from "grommet";
import { Previous } from "grommet-icons";
import { useNavigate } from "react-router-dom";

const TopHeader = () =>{
    const navigate = useNavigate();
    return(
        <Header className="Header">
            <Button icon={<Previous/>} onClick={() => {navigate(-1);}}/>
        </Header>
    );
}

export default TopHeader;