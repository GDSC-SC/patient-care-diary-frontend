import { FeedDetail } from "./pages/FeedDetail";
import { Feed } from "./pages/Feed";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { MyPage } from "./pages/MyPage";
import { MyCategory } from "./pages/MyCategory";
import { ProfilePage } from "./pages/ProfilePage";
import { useEffect } from "react";
import { Authentication } from "./services/Authentication";


function App(){
  
  useEffect(() => {
    const auth = new Authentication();
    if(!auth.isLoggedIn()) {
        auth.login();
    }
}, []);
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/feed" element={<Feed/>}/>
      <Route path="/feedDetail/:id" element={<FeedDetail/>}/>
      <Route path="/myPage" element={<MyPage/>}/>
      <Route path="/myCategory" element={<MyCategory/>}/>
      <Route path="/profilePage" element={<ProfilePage/>}/>
    </Routes>
  );
}

export default App;