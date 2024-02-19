import { DELETE, GET, POST } from ".";

export class ContentApi{
    makeUrl(url:string){
        return `/api/contents/${url}`;
    }


    getContent(contentId: number){
        return (GET(this.makeUrl(contentId.toString()), null));
    }

    delete(contentId:number){
        DELETE(this.makeUrl(contentId.toString()),null);
    }

    create({diaryId, categoryId, done, text}:{diaryId:number, categoryId:number, done:boolean, text:string}){
        const data = {
            "diaryId": diaryId,
            "categoryId": categoryId,
            "done": done,
            "text": text
        }
        POST(this.makeUrl('create'), data);
    }

    getDiary(diaryId:number){
        return(GET(this.makeUrl(`diary/${diaryId}`),null));
    }
    
}