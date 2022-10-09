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
            <Post/>
            <Post/>
        </div>
    );
};
