import { CommunityFeed } from "./pages/CommunityFeed";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";


function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/CommunityFeed" element={<CommunityFeed/>}/>
    </Routes>
  );
}

export default App;