import { DELETE, POST } from ".";

export class EmojiApi{
    makeUrl(url:string){
        return `/api/emoji/${url}`;
    }

    async create({emojiCode, diaryId}:{emojiCode: string, diaryId: number}){
        const data = {
            "emojiCode": emojiCode,
            "diaryId": diaryId
        }
        try{await POST(this.makeUrl('create'), data)}
        catch(error){
            if ((error as any).response && (error as any).response.status === 409) {
                console.log("Emoji already exists");
                return false;
            }
        };
        return true;
    }
    
    delete(diaryId:number, emojiCode:string){
        DELETE(this.makeUrl(`${diaryId.toString()}/${emojiCode}`), null);
    }
}