import { DELETE, GET, POST, PUT } from ".";

export class CategoryApi {
    categoryBaseUrl = '/api/categorys';

    // 카테고리 리스트를 모두 불러옴.
    async my() {
        return await GET(`${this.categoryBaseUrl}/my`, null) as JSON[];
    }

    // subtitle 생성
    async create({categoryCode, subtitle, color}: {categoryCode:string, subtitle: string, color: string}){
        const data = {
            "categoryCode" : categoryCode,
            "subtitle": subtitle,
            "color" : color
        }
        await POST(`${this.categoryBaseUrl}/create`, data);
    }

    async delete({categoryId}:{categoryId: number}){
        await DELETE(`${this.categoryBaseUrl}/${categoryId}`,null);
    }

    // visible = false가 delete category와 같은 역할
    async visible(categoryId:number){
        await PUT(`${this.categoryBaseUrl}/visible/${categoryId}`,null)
    }

    // midCategory 수정
    async modify({categoryId, categoryCode, subtitle, color}:{categoryId:number, categoryCode:string, subtitle: string, color: string}){
        const data = {
            "categoryCode": categoryCode,
            "subtitle": subtitle,
            "color": color
        }
        await PUT(`${this.categoryBaseUrl}/${categoryId}`,data)
    }
}
