import React, {useState} from 'react';
import {Post} from 'src/components/profile/posts/Post';
import {PostType} from './../../../redux/types';
import {PostsContainerType} from 'src/components/profile/posts/PostsContainter';
import {useDispatch} from "react-redux";
import {AddPostActionCreator} from "./../../../redux/reducers/profile-reducer";
import {PostReduxForm, PostTextDataType } from './PostForm';
import {reset} from "redux-form";

export const Posts = (props: PostsContainerType) => {

    // const [inputValue, setInputValue] = useState('');

    const posts = props.arrayPosts.map((post: PostType) => <Post key={post.id} postText={post.postText}
                                                                 likesCount={post.likesCount}/>);
    const dispatch = useDispatch();

    // const addPost = () => {
    //     props.addPost(inputValue);
    //     setInputValue('');
    // }

    // const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     setInputValue(event.currentTarget.value);
    // }

    const onHandleSubmit = (postTextData: PostTextDataType) => {
        dispatch(AddPostActionCreator(postTextData.post));
        dispatch(reset('postForm'));
    }

    return (
        <div>
            My Posts
            {/*<div>*/}
            {/*    <textarea value={inputValue}*/}
            {/*              onChange={onChangeHandler}*/}
            {/*    />*/}
            {/*    <button onClick={addPost}>send</button>*/}
            {/*</div>*/}
            {/*{posts}*/}
            {posts}
            <PostReduxForm onSubmit={onHandleSubmit} />
        </div>
    );
};
