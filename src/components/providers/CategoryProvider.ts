import axios from "axios";
import { useEffect } from "react";

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
const BASE_URI ='https://patient-care-diary.fly.dev';


export function CategoryProvider(){
    console.log(`https://patient-care-diary.fly.dev/api/categorys/my`);
    const a = axios.create({
        withCredentials: true
    });
    a.get('/api/categorys/my', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    }).then((res)=>{
        console.log(res.data);
    });
}