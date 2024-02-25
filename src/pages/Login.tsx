import { MainLayout } from "../components/layout/MainLayout";

export function Login() {
    const fetchData = () => {
        window.location.href="http://patient-care-diary.dev/oauth2/authorization/google"
    };
    
    return (
        <MainLayout>
            <button onClick={fetchData}>Login</button>
        </MainLayout>
    );
}