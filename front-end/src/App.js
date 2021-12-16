import React, {useEffect, useState} from 'react';
import Header from './contents/components/Header';
import Navbar from "./contents/components/Navbar";
import Posts from "./contents/components/Posts.jsx";
import { Div } from './main';
import {Route, Routes} from "react-router-dom";
import Search from './contents/components/Search.jsx';
import Profile from './contents/components/Profile.jsx';
import Home from "./home";
import Write from "./contents/components/Write.jsx";
import axios from "axios";

function App(props) {

    const [postsData, setPostsData] = useState([]);
    const [user, setUser] = useState({});

    const [postImg, setPostImg] = useState([]);

    useEffect(() => {

    }, [])

    const callApi = async () => {
        const twit = await axios.get('/page')
            .then((res) => {
                const twit = res.data.twits;
                setPostsData(twit)
            })
            .catch((err) => console.error(err))
    }

    const callUser = async () => {
        await axios({
            method: 'get',
            url: '/user'
        }).then((res) => {
            const user = res.data;
            setUser(user)
        })
    }

    useEffect( async () => {
        await callApi()
        await callUser()
    }, [])


    const [isLoggedIn, setisLogedIn] = useState(false);
    const postList =  postsData && postsData.map((post, i) => <Posts user={user} postsData={postsData[i]} />);
    useEffect(() => {
        const cookie = document.cookie;
        {
            cookie
            ? setisLogedIn(true)
            : setisLogedIn(false)
        }
    })

  return(
    <>
      {
          isLoggedIn
          ? (
            <Div container>
                <Header />
                <Div flex>
                    <Routes>
                        <Route path="/" element={postList} />
                        <Route path="/search" element={<Search user={user} />} />
                        <Route path="/profile" element={<Profile user={user} postData={postsData} />} />
                        <Route path="/write" element={<Write />} />
                    </Routes>
                </Div>
                <Navbar />
            </Div>
            ) : (
                <>
                    <Home />
                </>
              )
      }
    </>
  )
}

export default App;
