import { DELETE, GET, POST, PUT } from ".";

export class CategoryApi {
    categoryBaseUrl = '/api/categorys';

    // 카테고리 리스트를 모두 불러옴.
    async my() {
        return await GET(`${this.categoryBaseUrl}/my`, null) as JSON[];
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

    delete({categoryId}:{categoryId: number}){
        DELETE(`${this.categoryBaseUrl}/${categoryId}`,null);
    }

    // visible = false가 delete category와 같은 역할
    visible(categoryId:number){
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
