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
      <Route path="/auth/callback" element={<LoginCallback/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/feedDetail" element={<FeedDetail/>}/>
      <Route path="/feed" element={<Feed/>}/>
      <Route path="/myPage" element={<MyPage/>}/>
      <Route path="/myCategory" element={<MyCategory/>}/>
    </Routes>
  );
}

export default App;