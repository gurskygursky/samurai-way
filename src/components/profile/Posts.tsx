import React, {ChangeEvent, createRef, LegacyRef, RefObject, useRef} from 'react';
import {Post} from './Post';
import {PostType} from './../../redux/state';

type PostsPropsType = {
    arrayPosts: Array<PostType>;
}

export const Posts = (props: PostsPropsType) => {

    const posts = props.arrayPosts.map((post: PostType) => <Post postText={post.postText}
                                                                 likesCount={post.likesCount}/>);

    const textRef = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        alert(textRef.current?.value);
    }

    return (
        <div>
            My Posts
            <div>
                <textarea ref={textRef}/>
                <button onClick={addPost}>send</button>
            </div>
            {posts}
        </div>
    );
};
