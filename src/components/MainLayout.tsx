import { Grommet } from "grommet";
import TopHeader from "./TopHeader";
import BottomFooter from "./BottomFooter";
import './MainLayout.css'
import { ReactNode } from "react";

export function MainLayout({ children } : any){
    return(
        <Grommet className="page">
            <TopHeader/>
            {children}
            <BottomFooter/>
        </Grommet>
    );
}