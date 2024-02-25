import { ToastContainer } from "react-toastify";
import { FeedDetail } from "./pages/FeedDetail";
import { Feed } from "./pages/Feed";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { MyPage } from "./pages/MyPage";
import { MyCategory } from "./pages/MyCategory";
import { ProfilePage } from "./pages/ProfilePage";
import { Login } from "./pages/Login";

function App(){
  return(
    <div>
      <ToastContainer/>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/feed" element={<Feed/>}/>
      <Route path="/feedDetail/:id" element={<FeedDetail/>}/>
      <Route path="/myPage" element={<MyPage/>}/>
      <Route path="/myCategory" element={<MyCategory/>}/>
      <Route path="/profilePage" element={<ProfilePage/>}/>
      </Routes>
    </div>

  );
}

export default App;