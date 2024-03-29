import { Hearts } from "react-loader-spinner";
import '../styles/components/Box.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Login() {
    const navigate = useNavigate();
    const fetchData = () => {
        window.location.href = "https://patient-care-diary.dev/oauth2/authorization/google";
    };
    
    const getTocken = () => {
        const accessToken = new URL(window.location.href).searchParams.get("accessToken");
        const refreshToken = new URL(window.location.href).searchParams.get("refreshToken");
        if (accessToken !== null && refreshToken !== null && accessToken !== '' ) {
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            const date = new Date();
            navigate(`/home/${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2, '0')}${(date.getDate()).toString().padStart(2, '0')}`)
        }
    };

    useEffect(() => {
        getTocken();
    }, []);
    
    return (
        <div 
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)', // 수직 및 수평 가운데 정렬을 위한 transform 속성 사용
            }}
        >
            <div className="FlexColumn">
            <div className="FlexRow">
                <h1>Patient Care Diary</h1>
                <Hearts
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="hearts-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />
            </div>
            <div 
                onClick={fetchData}
                style={{
                    display: 'flex',
                    borderRadius: '30vw',
                    backgroundColor: '#E5E5E5',
                    padding: '2vh 10vw',
                    justifyContent:'center'
                    }}>
                    <p style={{ fontSize: '20px' }}>Login</p>
                </div>
            </div>
            
        </div>
    );
}