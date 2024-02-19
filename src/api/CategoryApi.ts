import axios from "axios";
import { Component, useEffect, useState } from "react";
import { GET, POST, PUT } from ".";

export class CategoryApi {
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
