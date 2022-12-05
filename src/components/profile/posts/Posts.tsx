import React, {ChangeEvent, createRef, useState} from 'react';
import {Post} from 'src/components/profile/posts/Post';
import {PostType} from './../../../redux/types';
import {PostsContainerType} from 'src/components/profile/posts/PostsContainter';


export const Posts = (props: PostsContainerType) => {

    const [inputValue, setInputValue] = useState('');

    const posts = props.arrayPosts.map((post: PostType) => <Post key={post.id} postText={post.postText}
                                                                 likesCount={post.likesCount}/>);

    const textRef = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost(inputValue);
        setInputValue('');
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.currentTarget.value);
    }

    return (
        <div>
            My Posts
            <div>
                <textarea ref={textRef}
                          value={inputValue}
                          onChange={onChangeHandler}
                />
                <button onClick={addPost}>send</button>
            </div>
            {posts}
        </div>
    );
};
