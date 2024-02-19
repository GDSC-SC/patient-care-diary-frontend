import { GET, POST } from ".";

export class DiaryApi{
    makeUrl(url:string){
        return `/api/diarys/${url}`;
    }

    create(date:Date){
        const data = {
            "date": Date
        }
        POST(this.makeUrl('create'), data);
    }

    getDiary(diaryId: number){
        return (GET(this.makeUrl(diaryId.toString()), null));
    }

    deleteDiary(diaryId:number){
        
    }
    
    my(){
        return(GET(this.makeUrl("my"),null));
    }

    getDiaryByDate(date:Date){
        return (GET(this.makeUrl(`date/{date.toString()}`), null))
    }

    all(){
        return(GET(this.makeUrl('all'), null));
    }
}