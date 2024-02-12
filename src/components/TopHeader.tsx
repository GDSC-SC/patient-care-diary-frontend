import { Button, Header } from "grommet";
import { Previous } from "grommet-icons";

const TopHeader = () =>{
    return(
        <Header className="header" 
            style={{ position: 'sticky', top: 0,backgroundColor: 'white', height:'5vh'}}>
            <Button icon={<Previous/>} onClick={() => {
                
            }}/>
        </Header>
    );
}

export default TopHeader;