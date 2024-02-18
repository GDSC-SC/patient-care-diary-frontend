import axios from "axios";
import { Component, useEffect, useState } from "react";

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
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

async function GET(url:string, data:any){
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

async function POST(url:string, data:any,){
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

async function PUT(url:string, data:any){
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

export class categoryApi {
    categoryBaseUrl = '/api/categorys';

    // 카테고리 리스트를 모두 불러옴.
    my():any {
        return (GET(`${this.categoryBaseUrl}/my`, null));
    }

    // subtitle 생성
    create({categoryCode, subtitle, color}: {categoryCode:string, subtitle: string, color: string}){
        const data = {
            "categoryCode" : categoryCode,
            "subtitle": subtitle,
            "color" : color
        }
        POST(`${this.categoryBaseUrl}/create`, data);
    }

    // visible = false가 delete category와 같은 역할
    visible(categoryId:number){
        const data ={
            "categoryId" : categoryId
        };
        PUT(`${this.categoryBaseUrl}/visible/${categoryId}`,null)
    }

    // midCategory 수정
    modify({categoryId, categoryCode, subtitle, color}:{categoryId:number, categoryCode:string, subtitle: string, color: string}){
        const data = {
            "categoryCode": categoryCode,
            "subtitle": subtitle,
            "color": color
        }
        PUT(`${this.categoryBaseUrl}/${categoryId}`,data)
    }
}
