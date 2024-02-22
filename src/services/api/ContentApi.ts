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

    create({diaryId, categoryId}:{diaryId:number, categoryId:number}){
        const formdata = new FormData();
        // formdata.append("requestDto", `\n \{diaryId: ${diaryId},\n \categoryId: ${categoryId},\n \done: false,\n \text: ""}`);
        formdata.append("requestDto", `{
            "diaryId": ${diaryId},
            "categoryId": ${categoryId},
            "done": false,
            "text": '',
        }`)
        formdata.append("image",'');
        
        const requestOptions = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'multipart/form-data'
            },
            body: formdata,
        };
        
        fetch("https://patient-care-diary.fly.dev/api/contents/create", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));

    }

    getDiary(diaryId:number){
        return(GET(this.makeUrl(`diary/${diaryId}`),null));
    }
}