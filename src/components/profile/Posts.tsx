import React from 'react';
import { PostType } from './../../index';
import {Post} from './Post';

// type PostType = {
//     id: number;
//     postText: string;
//     likesCount: number;
// }

type PostsPropsType = {
    arrayPosts: Array<PostType>;
}

export const Posts = (props: PostsPropsType) => {

    // const ArrayPosts: Array<PostType> = [
    //     {id: 1, postText: `It's my first post`, likesCount: 888},
    //     {id: 2, postText: `Hello, IT-INCUBATOR!`, likesCount: 777},
    //     {id: 3, postText: `React - kabzda kak prosto!`, likesCount: 100500},
    //     {id: 4, postText: `YO!`, likesCount: 333},
    // ]

    const postItems = props.arrayPosts.map((post: PostType) => <Post postText={post.postText} likesCount={post.likesCount}/>);

    return (
        <div>
            My Posts
            <div>
                <textarea/>
                <button>send</button>
            </div>
            <div>
                {postItems}
            </div>
            {/*{ArrayPosts.map((post: PostType) => <Post postText={post.postText} likesCount={post.likesCount}/>)}*/}
            {/*<Post postText={`It's my first post`} likesCount={888}/>*/}
            {/*<Post postText={`Hello, IT-INCUBATOR`} likesCount={777}/>*/}
            {/*<Post postText={'React - kabzda kak prosto!'} likesCount={100500}/>*/}
            {/*<Post postText={ArrayPosts[0].postText} likesCount={ArrayPosts[0].likesCount}/>*/}
            {/*<Post postText={ArrayPosts[1].postText} likesCount={ArrayPosts[1].likesCount}/>*/}
            {/*<Post postText={ArrayPosts[2].postText} likesCount={ArrayPosts[2].likesCount}/>*/}
            {/*<Post postText={ArrayPosts[3].postText} likesCount={ArrayPosts[3].likesCount}/>*/}
        </div>
    );
};
