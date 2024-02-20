import { GET, POST } from ".";

export class DiaryApi{
    makeUrl(url:string){
        return `/api/diarys/${url}`;
    }

    create(date:Date){
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        const data = {
            "date": formattedDate
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

    async getDiaryByDate(date:Date){
        const formattedDate = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
        try {
            const diary = await GET(this.makeUrl(`date/${formattedDate}`), null)
            return diary;
        } catch (error) {
            throw error;
        }
    }

    all(){
        return(GET(this.makeUrl('all'), null));
    }
}