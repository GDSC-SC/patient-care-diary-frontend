import axios from "axios";
import { useState } from "react";
import { useGoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
export function Login(){
    const navigate = useNavigate();
    const googleClientId = process.env.REACT_APP_CLIENT_ID;
    const [member, setMember] = useState({
        loginId: "",
        password: ""
    });
    const a = axios.create({
        withCredentials: true
    });
    
    const googleLogin = ()=>{
        // fetch(`/login/callback`,{
        //     method:"POST",
        //     headers:{
        //         "Content-Type": "application/json",
        //     },
        //     body:JSON.stringify(member),
        // }
        // ).then((res) =>{
        //     let jwtToken = res.headers.get("Authorization") ||"";
        //     localStorage.setItem("Authorization", jwtToken);
        //     return res.json();
        // }).then((res)=>{
        //     console.log("끝");
        // })
        axios.get('/login/callback');
        
    }

    return(
        <div>
            <button onClick={() => {
                window.location.href = 'https://patient-care-diary.fly.dev/oauth2/authorize/google';
                console.log('href로 리다이렉션');
                googleLogin();
                console.log('구글 로그인 ㅎZ');
            }}>Login</button>
        </div>
    );
}
