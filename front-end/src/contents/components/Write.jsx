import React, {useRef, useState} from 'react';
import {Input, Div, Form, Label, Textarea, Button, Img} from './write';
import axios from 'axios';

const Write = () => {
    const [imgBase64, setImgBase64] = useState(""); // 파일 base64
    const [imgFile, setImgFile] = useState(null);	//파일
    const [url, setUrl] = useState('');
    const img = useRef();

    const handleChangeFile = (event) => {

        const formData = new FormData();
        formData.append('img', event.target.files[0]);
        axios.post('/post/img', formData, {
            header: { 'content-type': 'multipart/form-data' },
        }).then((res) => {
            console.log(res);
            setUrl(res.data.url);
        }).catch((err) => {
            console.error(err)
        });

        let reader = new FileReader();

        reader.onloadend = () => {
            // 2. 읽기가 완료되면 아래코드가 실행됩니다.
            const base64 = reader.result;
            if (base64) {
                setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
            }
        }
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
            setImgFile(event.target.files[0]); // 파일 상태 업데이트
        }

        img.current.style = 'display: block'
    }

    return (
        <Div container>
            <Form action="/post" method="post" encType="multipart/form-data">
                <Div img>
                    <Label htmlFor="img">
                        이미지 업로드
                    </Label>
                    <Input img type="file" id="img" required onChange={handleChangeFile} />
                </Div>
                <Div showImg>
                    <Img ref={img} src={imgBase64} />
                    <input id="url" type="hidden" name="url" value={url}/>
                </Div>
                <Div>
                    <Textarea name="content" maxLength="140" placeholder="문구 입력..." />
                </Div>
                <Button type="submit">업로드</Button>
            </Form>
        </Div>
    );
};

export default Write;
