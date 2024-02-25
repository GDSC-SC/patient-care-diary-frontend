import { useEffect } from "react";
import { MainLayout } from "../components/layout/MainLayout";

export function Login() {
    const fetchData = () => {
        window.location.href="http://patient-care-diary.dev/oauth2/authorization/google"
    };

    useEffect(() => {
        const getTocken = async () => {
            const token = await new URL(window.location.href).searchParams.get("accessToken");
            const refreshToken = await new URL(window.location.href).searchParams.get("refreshToken");
    
            localStorage.setItem('accessToken', token||'');
            localStorage.setItem('refreshToken', refreshToken||'');
        }
        getTocken();
    }, []);

    
    return (
        <MainLayout>
            <button onClick={fetchData}>Login</button>
        </MainLayout>
    );
}