import { FeedDetail } from "./pages/FeedDetail";
import { Feed } from "./pages/Feed";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { MyPage } from "./pages/MyPage";
import { MyCategory } from "./pages/MyCategory";
import { Login } from "./pages/Login";
import { LoginCallback } from "./pages/LoginCallback";


function App(){
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/feed" element={<Feed/>}/>
      <Route path="/feedDetail" element={<FeedDetail/>}/>
      <Route path="/myPage" element={<MyPage/>}/>
      <Route path="/myCategory" element={<MyCategory/>}/>
      <Route path="/login/callback" element={<LoginCallback/>}/>
    </Routes>
  );
}

export default App;