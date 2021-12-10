import React from 'react';
import { Div, Img, Button, Input, Form, A } from './signin';

const SignIn = () => {

    return (
        <Div container>
            <Div info>
                <Div className="logo" img>
                    <Img src={process.env.PUBLIC_URL + '/Img/main-logo.png'}/>
                </Div>
                <div className="user-info">
                    <Form id="login-form" action="/auth/login" method="post">
                        <Div flex>
                            <Input id="email" type="email" name="email" placeholder="전화번호, 사용자 이름 또는 이메일" required autoFocus />
                        </Div>
                        <Div flex className="input-group">
                            <Input id="password" type="password" name="password" placeholder="비밀번호" required />
                        </Div>
                        <Div flex>
                            <Button id="login" type="submit" className="btn">로그인</Button>
                        </Div>
                    </Form>
                    <Div lineContain flex>
                        <Div line></Div>
                        또는
                        <Div line></Div>
                    </Div>
                    <Div flex>
                        <Img kakao src={process.env.PUBLIC_URL + '/Img/Kakao_logo.jpeg'} />
                        <A id="kakao" href="/auth/kakao" className="btn">KaKao로 로그인</A>
                    </Div>
                </div>
            </Div>

            <Div info signup flex>
                <p>계정이 없으신가요?</p>
                <A signup id="join" href="/signup" className="btn">가입하기</A>
            </Div>
        </Div>
    );
};

export default SignIn;
