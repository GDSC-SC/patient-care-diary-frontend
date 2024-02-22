import { GET, PUT } from ".";

export interface MemberType{
    "name": string,
    "email": string,
    "picture": string,
    "gender": string,
    "illness": string,
    "type": string,
    // "description": string
}

export class MemberApi{
    makeUrl(url:string){
        return `/api/member/${url}`;
    }

    async signUp({gender, illenss, type}: {gender:string, illenss:string, type:string}){
        const data = {
            "gender": gender,
            "illness": illenss,
            "type": type
        };
        PUT(this.makeUrl('sign-up'), data);
    }

    async get(){
        return await GET(this.makeUrl('my'), null);
    }

    async parseMemberData(){
        const data = await this.get();
        const parsedData : MemberType = {
            name: data.name,
            email: data.email,
            picture: data.picture,
            gender: data.gender,
            illness: data.illness,
            type: data.type
        }
        return parsedData;
    }

}