import { useEffect, useState } from "react";

export function LoginCallback() {
    const [member, setMember] = useState({
        loginId: "",
        password: "",
    });
    const googleLogin = async()=>{
        fetch(`${window.location.origin}/login/callback`
        ).then((res) =>{
            console.log(res);
            console.log(res.headers.get("Authorization"));
        })
    }
    useEffect(()=>{
        const result = googleLogin();
    }, []);
    return(
        <></>
    );
}