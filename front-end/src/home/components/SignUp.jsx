import React, {useCallback, useState} from 'react';
import { Div, Img, A, Form, Input, Button, P } from './signup';

const SignUp = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        passwordCheck: '',
        nick: ''
    });
    const { email, password, passwordCheck, nick } = userInfo;

    const onUserInfoChange = useCallback((e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    });

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
                    <A id="kakao" href="http://localhost:4848/auth/kakao" className="btn">KaKao로 로그인</A>
                </Div>
                <Div lineContain flex>
                    <Div line></Div>
                    또는
                    <Div line></Div>
                </Div>
                {/* action="/auth/join" method="post"*/}
                <Form action="/auth/join" method="post">
                    <Div flex>
                        <Input
                            type="email"
                            name="email"
                            onChange={onUserInfoChange}
                            value={email}
                            placeholder="이메일 주소"
                            required
                        />
                    </Div>
                    <Div flex>
                        <Input
                            type="text"
                            name="nick"
                            onChange={onUserInfoChange}
                            value={nick}
                            placeholder="사용자 이름"
                            required
                        />
                    </Div>
                    <Div flex>
                        <Input
                            type="password"
                            name="password"
                            onChange={onUserInfoChange}
                            value={password}
                            placeholder="비밀번호"
                            required
                        />
                    </Div>
                    <Div flex>
                        <Input
                            type="password"
                            name="passwordCheck"
                            onChange={onUserInfoChange}
                            value={passwordCheck}
                            placeholder="비밀번호 확인"
                            required
                        />
                    </Div>
                    <Div flex>
                        <Button type="submit">
                            가입
                        </Button>
                    </Div>
                </Form>
            </Div>

            <Div info signin flex>
                <P>계정이 있으신가요?</P>
                <A signin id="join" href="/signin" className="btn">로그인</A>
            </Div>
        </Div>
    );
};

export default SignUp;
