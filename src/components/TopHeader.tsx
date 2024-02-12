import { Button, Header } from "grommet";
import { Previous } from "grommet-icons";
import { useNavigate } from "react-router-dom";



const TopHeader = () =>{
    return(
        <Header className="Header">
            <Button icon={<Previous/>} onClick={() => {
                
            }}/>
        </Header>
    );
}

export default TopHeader;