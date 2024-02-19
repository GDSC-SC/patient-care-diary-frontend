import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    const fetchData = () => {
        window.location.href="http://patient-care-diary.fly.dev/oauth2/authorization/google"
    };
    
    const token = new URL(window.location.href).searchParams.get("accessToken");
    const refreshToken = new URL(window.location.href).searchParams.get("refreshToken");

    const [accessToken, setAccessToken] = useState<string>('');

    localStorage.setItem('accessToken', token||'');
    localStorage.setItem('refreshToken', refreshToken||'');
    
    // console.log(token);
    // console.log(refreshToken);
    
    useEffect(() => {
        if(localStorage.getItem('accessToken') !== '' && localStorage.getItem('accessToken') !== null)
            navigate('/home');
    },[accessToken, navigate]);

    return (
        <div>
            <button onClick={fetchData}>Login</button>
        </div>
    );
}