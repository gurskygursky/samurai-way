import React from 'react';
import {Post} from './Post';

export const Posts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea/>
                <button>send</button>
            </div>
            <Post postText={`It's my first post`} likesCount={888}/>
            <Post postText={`Hello, IT-INCUBATOR`} likesCount={777}/>
            <Post postText={'React - kabzda kak prosto!'} likesCount={100500}/>
        </div>
    );
};
