import { GET, POST, DELETE } from ".";

export class DiaryApi{
    makeUrl(url:string){
        return `/api/diarys/${url}`;
    }

    async create({date}:{date: Date}){
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        const data = {
            "date": formattedDate
        }
        await POST(this.makeUrl('create'), data)
    }

    getById(diaryId: number){
        return (GET(this.makeUrl(diaryId.toString()), null));
    }

    delete(diaryId:number){
        DELETE(this.makeUrl(diaryId.toString()), null);
    }
    
    my(){
        return(GET(this.makeUrl("my"),null));
    }

    async getByDate(date:Date){
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