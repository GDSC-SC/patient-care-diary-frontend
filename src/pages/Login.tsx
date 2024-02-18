import {CredentialResponse, GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react';
import axios from 'axios';
export function Login(){
    const navigate = useNavigate();


    const responseGoogle = (response:any) => {
        console.log(response);
        // 여기서 응답을 처리하거나 서버로 전송합니다.
        
      };
    

    return(
        
        <div>
            <GoogleOAuthProvider clientId={""}>
                <GoogleLogin onSuccess={responseGoogle}                        
                    />
            </GoogleOAuthProvider>
        </div>
    );
    }