import { ToastContainer } from "react-toastify";
import { FeedDetail } from "./pages/FeedDetail";
import { Feed } from "./pages/Feed";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { MyPage } from "./pages/MyPage";
import { MyCategory } from "./pages/MyCategory";
import { ProfilePage } from "./pages/ProfilePage";
import { Login } from "./pages/Login";
import { Loading } from "./components/Loading";
import { useState } from "react";

export class LoadingHandler {
  static setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  static setSetLoading(setLoading:React.Dispatch<React.SetStateAction<boolean>>){
    LoadingHandler.setLoading = setLoading;
  }
}

function App(){
  const [loading, realSetLoading] = useState<boolean>(false);
  LoadingHandler.setSetLoading(realSetLoading);
  return(
    <div>
      {loading && <Loading/>}
      <ToastContainer/>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home/:date" element={<Home/>}/>
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