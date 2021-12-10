import React, {useCallback, useState} from 'react';
import { Div, Img, A, Form, Input, Button } from './signup';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        passwordCheck: '',
        nickname: ''
    });
    const { email, password, passwordCheck, nickname } = userInfo;

    const onUserInfoChange = useCallback((e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo);
    }

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
                {/* action="/auth/join" method="post"*/}
                <Form
                    onSubmit={onSubmit}
                >
                    <Div flex className="input-group">
                        <Input
                            type="email"
                            name="email"
                            onChange={onUserInfoChange}
                            value={email}
                            placeholder="이메일 주소"
                        />
                    </Div>
                    <Div flex className="input-group">
                        <Input
                            type="text"
                            name="nickname"
                            onChange={onUserInfoChange}
                            value={nickname}
                            placeholder="사용자 이름"
                        />
                    </Div>
                    <Div flex className="input-group">
                        <Input
                            type="password"
                            name="password"
                            onChange={onUserInfoChange}
                            value={password}
                            placeholder="비밀번호"
                        />
                    </Div>
                    <Div flex className="input-group">
                        <Input
                            type="password"
                            name="password-check"
                            onChange={onUserInfoChange}
                            value={passwordCheck}
                            placeholder="비밀번호 확인"
                        />
                    </Div>
                    <Div flex>
                        <Button
                            type="submit"
                        >
                            가입
                        </Button>
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
