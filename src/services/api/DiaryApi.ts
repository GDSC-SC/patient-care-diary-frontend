import { GET, POST, DELETE } from ".";

export class DiaryApi{
    makeUrl(url:string){
        return `/api/diarys/${url}`;
    }

    async create({date}:{date: string}){
        const data = {
            "date": `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`
        }
        await POST(this.makeUrl('create'), data)
    }

    getById(diaryId: number){
        return (GET(this.makeUrl(diaryId.toString()), null));
    }

    async delete(diaryId:number){
        await DELETE(this.makeUrl(diaryId.toString()), null);
    }
    
    my(){
        return(GET(this.makeUrl("my"),null));
    }

    async getByDate(date:String){
        try {
            const diary = await GET(this.makeUrl(`date/${date}`), null)
            return diary;
        } catch (error) {
            throw error;
        }
    }

    all(){
        return(GET(this.makeUrl('all'), null));
    }
}