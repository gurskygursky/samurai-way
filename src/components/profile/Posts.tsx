import React from 'react';
import {Post} from './Post';
import {PostType} from './../../redux/state';

type PostsPropsType = {
    arrayPosts: Array<PostType>;
}

export const Posts = (props: PostsPropsType) => {

    const posts = props.arrayPosts.map((post: PostType) => <Post postText={post.postText}
                                                                 likesCount={post.likesCount}/>);

    return (
        <div>
            My Posts
            <div>
                <textarea/>
                <button>send</button>
            </div>
            {posts}
        </div>
    );
};
