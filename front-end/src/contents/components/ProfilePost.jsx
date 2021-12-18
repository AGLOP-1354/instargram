import React, {useEffect, useState} from 'react';
import {Img} from "./profilePost";

const ProfilePost = ({post, user}) => {
    return post.UserId === user.id && (<div>
            <Img src={post.img} />
        </div>)
};

export default ProfilePost;
