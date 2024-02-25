import { DELETE, GET, POST, PUT } from ".";
export interface ContentForCreate {
    contentId:number|null, diaryId:number, categoryId:number, done:boolean, text:string, img:File|undefined
}
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

    async create(props: ContentForCreate){
        console.log("try to create", props)
        const formdata = new FormData();
        const requestData = {
            diaryId: props.diaryId,
            categoryId: props.categoryId,
            done: props.done,
            text: props.text,
        };
        formdata.append("requestDto", new Blob([JSON.stringify(requestData)], { type: 'application/json' }));

        if(props.img !== undefined) {
            formdata.append("image", props.img, props.img.name);
        } else {
            formdata.append("image", new Blob([JSON.stringify(null)], { type: 'application/json' }));
        }
        
        await POST(this.makeUrl("create"), formdata);
    }

    async update(props: ContentForCreate){
        if (props.contentId === null) {
            throw new Error("contentId is null");
        }
        const formdata = new FormData();
        const requestData = {
            done: props.done,
            text: props.text,
        };
        formdata.append("requestDto", new Blob([JSON.stringify(requestData)], { type: 'application/json' }));

        if(props.img !== undefined) {
            formdata.append("image", props.img, props.img.name);
        } else {
            formdata.append("image", new Blob([JSON.stringify(null)], { type: 'application/json' }));
        }
        
        await PUT(this.makeUrl(props.contentId.toString()), formdata);
    }

    getDiary(diaryId:number){
        return(GET(this.makeUrl(`diary/${diaryId}`),null));
    }
}