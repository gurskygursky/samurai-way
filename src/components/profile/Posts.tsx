import React, {ChangeEvent, createRef} from 'react';
import {Post} from './Post';
import {PostType, ActionsType} from './../../redux/store';
import { AddPostActionCreator, UpdatePostActionCreator} from './../../redux/reducers/profile-reducer';

type PostsPropsType = {
    addPost: () => void;
    onChangeHandler: (newPostText: string) => void;
    postText: string;
    arrayPosts: Array<PostType>;
    // postText: string;
    // dispatch: (action: ActionsType) => void;
}

export const Posts = (props: PostsPropsType) => {

    const posts = props.arrayPosts.map((post: PostType) => <Post postText={post.postText}
                                                                 likesCount={post.likesCount}/>);

    const textRef = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost();
        // props.dispatch(AddPostActionCreator());
        // props.dispatch(UpdatePostActionCreator(''));
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(event.currentTarget.value);
        // props.dispatch(UpdatePostActionCreator(event.currentTarget.value));
    }

    return (
        <div>
            My Posts
            <div>
                <textarea ref={textRef} value={props.postText} onChange={onChangeHandler}/>
                <button onClick={addPost}>send</button>
            </div>
            {posts}
        </div>
    );
};
