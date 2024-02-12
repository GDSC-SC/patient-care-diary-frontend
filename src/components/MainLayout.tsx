import { Grommet } from "grommet";
import TopHeader from "./TopHeader";
import BottomFooter from "./BottomFooter";
import './MainLayout.css'

export function MainLayout({ children } : any){
    return(
        <Grommet className="Page">
            <TopHeader/>
            {children}
            <BottomFooter/>
        </Grommet>
    );
}