import axios from "axios";

const accessToken = localStorage.getItem('accessToken');

const baseAxios = axios.create({
    withCredentials: true
});

type CategoryType = {
    id : number,
    categoryCode : string,
    category: string,
    midCategory: string,
    color: string,
    visible: boolean,
}

export async function GET(url:string, data:any){
    await baseAxios.get(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        data: data,
    }).then((res)=>{
        const result = <JSON>res.data;
        console.log(result);
        return result;
    })
    
}

export async function POST(url:string, data:any,){
    await baseAxios.post(url, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": 'application/json',
        },
    }).then((res)=>{
        const result = <JSON>res.data;
        console.log(result);
        return result;
    })
}

export async function PUT(url:string, data:any){
    await baseAxios.put(url, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        data:data
    }).then((res)=>{
        const result = <JSON>res.data;
        console.log(result);
        return result;
    })
}

export async function DELETE(url:string, data:any){
    await baseAxios.delete(url, {
      headers: {
          Authorization: `Bearer ${accessToken}`,
      },
      data:data
  }).then((res)=>{
      const result = <JSON>res.data;
      console.log(result);
      return result;
  })
}