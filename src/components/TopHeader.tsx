import { Button, Header } from "grommet";
import { Previous } from "grommet-icons";
import { useNavigate } from "react-router-dom";



const TopHeader = () =>{
    return(
        <Header className="header" 
            style={{ position: 'sticky', top: 0,backgroundColor: 'white'}}>
            <Button icon={<Previous/>} onClick={() => {
                
            }}/>
        </Header>
    );
}

export default TopHeader;