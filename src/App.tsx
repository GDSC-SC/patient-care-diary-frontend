import { CommunityFeed } from "./pages/CommunityFeed";
import { CommunityHome } from "./pages/CommunityHome";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { MyPage } from "./pages/MyPage";
import { MyCategory } from "./pages/MyCategory";


function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/communityFeed" element={<CommunityFeed/>}/>
      <Route path="/communityHome" element={<CommunityHome/>}/>
      <Route path="/myPage" element={<MyPage/>}/>
      <Route path="/myCategory" element={<MyCategory/>}/>
    </Routes>
  );
}

export default App;