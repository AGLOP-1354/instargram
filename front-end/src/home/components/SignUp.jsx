import React from 'react';
import { Div, Img, A, Form, Input, Button } from './signup';

const SignUp = () => {
    return (
        <Div container>
            <Div info>
                <Div img>
                    <Img src={process.env.PUBLIC_URL + '/Img/main-logo.png'} />
                </Div>
                <Div common phrases>
                    친구들의 사진과 동영상을 보려면 가입하세요.
                </Div>
                <Div common flex kakao>
                    <A id="kakao" href="/auth/kakao" className="btn">KaKao로 로그인</A>
                </Div>
                <Div lineContain flex>
                    <Div line></Div>
                    또는
                    <Div line></Div>
                </Div>
                <Form id="join-form" action="/auth/join" method="post">
                    <Div flex className="input-group">
                        <Input id="join-email" type="email" name="email" placeholder="이메일 주소" />
                    </Div>
                    <Div flex className="input-group">
                        <Input id="join-nick" type="text" name="nick" placeholder="사용자 이름" />
                    </Div>
                    <Div flex className="input-group">
                        <Input id="join-password" type="password" name="password" placeholder="비밀번호" />
                    </Div>
                    <Div flex>
                        <Button id="join-btn" type="submit" className="btn">가입</Button>
                    </Div>
                </Form>
            </Div>

            <Div info signin flex>
                <p>계정이 없으신가요?</p>
                <A signin id="join" href="/signin" className="btn">로그인</A>
            </Div>
        </Div>
    );
};

export default SignUp;
