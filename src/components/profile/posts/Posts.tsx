import React, {ChangeEvent, useState} from 'react';
import {Post} from 'src/components/profile/posts/Post';
import {PostType} from './../../../redux/types';
import {PostsContainerType} from 'src/components/profile/posts/PostsContainter';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import {AddPostActionCreator} from "./../../../redux/reducers/profile-reducer";

export type PostTextDataType = {
    post: string;
}

export const Posts = (props: PostsContainerType) => {

    const [inputValue, setInputValue] = useState('');

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

const PostForm: React.FC<InjectedFormProps<PostTextDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="post"
                    component="input"
                    type="input"
                    placeholder="Enter your message..."
                />
            </div>
            <button type={'submit'}>Send</button>
        </form>
    );
}

export const PostReduxForm = reduxForm<PostTextDataType>({
    form: 'postForm' // a unique identifier for this form
})(PostForm);