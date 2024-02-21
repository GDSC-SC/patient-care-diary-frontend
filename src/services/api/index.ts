import axios from "axios";

const accessToken = localStorage.getItem('accessToken');

const baseAxios = axios.create({
    withCredentials: true
});

export async function GET(url:string, data:any){
    try {
        const res = await baseAxios.get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            data: data,
        });
        const result = res.data;
        return result;
    } catch (error) {
        throw error;
    }
}


export async function POST(url:string, data:any,){
    try {
        const res = await baseAxios.post(url, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": 'application/json',
            },
        });
        const result = res.data;
        return result;
    } catch (error) {
        throw error;
    }
}

export async function PUT(url:string, data:any){
    try {await baseAxios.put(url, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        data:data
    }).then((res)=>{
        const result = res.data;
        return result;
    })} catch (error) {
        throw error;
    }
}

export async function DELETE(url:string, data:any){
    try { await baseAxios.delete(url, {
      headers: {
          Authorization: `Bearer ${accessToken}`,
      },
      data:data
  }).then((res)=>{
      const result = res.data;
      return result;
  })} catch (error) {
        throw error;
    }
}