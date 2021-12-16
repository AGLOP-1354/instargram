import React, {useEffect, useState} from 'react';
import {Img} from "./profilePost";

const ProfilePost = ({post, user}) => {


    return (
        <div>
            <Img src={post} />
        </div>
    );
};

export default ProfilePost;
