import { DELETE, POST } from ".";

export class EmojiApi{
    makeUrl(url:string){
        return `api/emoji/${url}`;
    }

    create({emojiCode, diaryId}:{emojiCode: string, diaryId: number}){
        const data = {
            "emojiCode": emojiCode,
            "diaryId": diaryId
        }
        POST(this.makeUrl('create'), data);
    }
    
    delete(diaryId:number){
        DELETE(this.makeUrl(diaryId.toString()), null);
    }
}