import { useState } from "react";

export function PhotoHandler() {
    const formdata = new FormData();
    const [fileInput, setFileInput] = useState(null as any);

    const onSelectFile = (e:any) => {
        e.preventDefault();
        e.persist();
        const selectedFiles = e.target.files;
        
    }
    formdata.append("requestDto", "{\n  \"diaryId\": 1,\n  \"categoryId\": 1,\n  \"done\": true,\n  \"text\": \"string\"\n}");
    formdata.append("image", fileInput.files[0], "postman-cloud:///1eecedfe-b4d8-48e0-9c9c-575459bb117c");

    const requestOptions = {
    method: "POST",
    headers: {},
    body: formdata,
    // redirect: "follow"
    };

    fetch("http://localhost:8080/api/contents/create", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}