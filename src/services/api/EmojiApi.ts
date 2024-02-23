import { DELETE, PUT, GET } from ".";

export class EmojiApi{
    makeUrl(url:string){
        return `/api/emoji/${url}`;
    }

    async get(diaryId:number){
        return await GET(this.makeUrl(diaryId.toString()), null);
    }

    async update({emojiCode, diaryId}:{emojiCode: string, diaryId: number}){
        const data = {
            "emojiCode": emojiCode,
            "diaryId": diaryId
        }
        await PUT(this.makeUrl('update'), data);
    }
    
    delete(diaryId:number, emojiCode:string){
        DELETE(this.makeUrl(`${diaryId.toString()}/${emojiCode}`), null);
    }
}