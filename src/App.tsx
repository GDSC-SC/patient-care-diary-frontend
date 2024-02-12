import { Previous } from "grommet-icons/icons";
import { Home } from "./pages/Home";
import {Box, Button, Grommet, Header, Menu, grommet} from 'grommet';
import { Route, Routes } from "react-router-dom";


function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    
  );
}

export default App;