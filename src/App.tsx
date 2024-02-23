import { FeedDetail } from "./pages/FeedDetail";
import { Feed } from "./pages/Feed";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { MyPage } from "./pages/MyPage";
import { MyCategory } from "./pages/MyCategory";
import { ProfilePage } from "./pages/ProfilePage";
import { ModalTest } from "./pages/modalTest";


function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/feed" element={<Feed/>}/>
      <Route path="/feedDetail/:id" element={<FeedDetail/>}/>
      <Route path="/myPage" element={<MyPage/>}/>
      <Route path="/myCategory" element={<MyCategory/>}/>
      <Route path="/profilePage" element={<ProfilePage/>}/>
      <Route path="/test" element={<ModalTest/>}/>
    </Routes>
  );
}

export default App;