import { Hearts } from "react-loader-spinner";
import { MainLayout } from "../components/layout/MainLayout";
import '../styles/components/Box.css'

export function Login() {
    const fetchData = () => {
        window.location.href="http://patient-care-diary.dev/oauth2/authorization/google"
    };
    
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