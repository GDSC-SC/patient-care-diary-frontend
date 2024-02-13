import { Grommet } from "grommet";
import TopHeader from "./TopHeader";
import BottomFooter from "./BottomFooter";
import '../../styles/components/MainLayout.css'

export function MainLayout({ children } : any){
    return(
        <Grommet>
            <TopHeader/>
            <div className="Page">
                {children}
            </div>
            <BottomFooter/>
        </Grommet>
    );
}