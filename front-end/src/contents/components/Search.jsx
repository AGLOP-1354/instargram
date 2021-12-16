import React, {useEffect, useState} from 'react';
import {Div, Input, Button, Form} from './search';
import {SearchOutlined} from '@ant-design/icons';
import axios from "axios";
import Posts from "./Posts.jsx";

const Search = ({user}) => {
    const [tagValue, setTagValue] = useState({
        hashtag: ''
    });
    const [posts, setPosts] = useState()
    // const callTagData = async () => {
    //     await axios.get('/page/hashtag')
    //         .then((res) => {
    //             setPosts(res.data.twits);
    //         })
    // }
    //
    // useEffect(() => {
    //     callTagData()
    // }, [])
    let postList;

    const onChange = (e) => {
        const { name, value} = e.target;
        setTagValue({
            [name] : value,
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios({
            method: 'get',
            url: 'page/hashtag',
            params: tagValue
        }).then((res) => {
            setPosts(res.data.twits);
        }).catch((err) => {
            console.error(err)
        })

    }


    return (
        <Div>
            <Form onSubmit={onSubmit} id="hashtag-form">
                <Input onChange={onChange} value={tagValue.hashtag} name="hashtag" type="text" name="hashtag" placeholder='검색' />
            </Form>
            {
                posts && posts.map((post, i) => <Posts postsData={posts[i]} user={user} /> )
            }
        </Div>
    );
};

export default Search;
