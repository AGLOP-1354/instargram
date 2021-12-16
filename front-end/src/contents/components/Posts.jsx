import React, {useEffect, useState} from 'react';
import {Div, Header, Img, StyledCard, H2} from './posts';
import {HeartOutlined, HeartTwoTone, SaveOutlined, SmallDashOutlined} from "@ant-design/icons";
import axios from "axios";

const Posts = ({user, postsData}) => {
    const { content, User, img } = postsData;
    const [goodState, setGoodState] = useState(false);

    const follow = () => {
        for(let i = 0; i < Object.keys(user.Followings).length; i++) {
            const match = user.Followings[i].id === User.id;
            return match
        }
    }

    let valueMatchState;

    {
        valueMatchState = user.Followings && Object.keys(user.Followings).length !== 0 && follow()
    }



    const onClick = () => {
        setGoodState(!goodState);
    }

    const onFollow = async () => {
        await axios.post(`/user/${User.id}/follow`)
            .then((res) => {
                console.log('success')
            })
    }

    return (
        <Div container>
            <Header>
                <H2>{User.nick}</H2>
                {
                    User.id === user.id || valueMatchState
                    ? null
                    : <button onClick={onFollow}>팔로우 하기</button>
                }
            </Header>
            <StyledCard
                hoverable
                cover={<Img alt="example" src={img} />}
            >
                <Div flex>
                    {
                        goodState
                        ? <HeartTwoTone onClick={onClick} twoToneColor="#eb2f96" />
                        : <HeartOutlined onClick={onClick} />
                    }
                    <SaveOutlined />
                </Div>
                <Div content>
                    <H2>{content}</H2>
                </Div>
            </StyledCard>
        </Div>
    );
};

export default Posts;
