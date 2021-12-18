import React, {useEffect, useState} from 'react';
import {Button, Div, Img, P, Span, Ul, Li} from './profile';
import {AppstoreOutlined, PlusOutlined, UserOutlined} from "@ant-design/icons";
import ProfilePost from "./ProfilePost.jsx";



const tabStyle1 = {
    0: '#fff',
    1: 'darkgrey'
}
const tabStyle2 = {
    0: 'darkgrey',
    1: '#fff'
}

const tabStyle3 = {
    0: '#fff',
    1: '#000'
}
const tabStyle4 = {
    0: '#000',
    1: '#fff'
}

const Profile = ({user, postData}) => {
    const [activeId, setActiveId] = useState(0);

    const profilePostImg = postData.map(post => {
        return <ProfilePost post={post} user={user} />
    })

    const clickHandler = (id) => {
        setActiveId(id)
    }

    const tabObj = {
        0: profilePostImg,
        1: null
    }

    return (
        <Div container>
            <Div header>
                <Div img>
                    <Img src={process.env.PUBLIC_URL + '/Img/user-icon.jpeg'}/>
                    <P>{user.nick}</P>
                    <Span><PlusOutlined /></Span>
                </Div>

                <Div line>
                    <p>0</p>
                    <p>게시물</p>
                </Div>
                <Div line>
                    <p>
                        {
                            user.Followings && Object.keys(user.Followings).length
                        }
                    </p>
                    <p>팔로잉</p>
                </Div>
                <Div line>
                    <p>
                        {
                            user.Followers && Object.keys(user.Followers).length
                        }
                    </p>
                    <p>
                        팔로워
                    </p>
                </Div>
            </Div>
            <Div line>
                <Button>프로필 편집</Button>
            </Div>
            <Div line>
                <Ul className="tabs">
                    <Li style={{color: tabStyle1[activeId], borderBottom: `1px solid ${tabStyle3[activeId]}` }} onClick={() => clickHandler(0)}>
                        <AppstoreOutlined />
                    </Li>
                    <Li style={{color: tabStyle2[activeId], borderBottom: `1px solid ${tabStyle4[activeId]}` }} onClick={() => clickHandler(1)}>
                        <UserOutlined />
                    </Li>
                </Ul>
            </Div>

            <Div contents>{tabObj[activeId]}</Div>
        </Div>
    );
};

export default Profile;
