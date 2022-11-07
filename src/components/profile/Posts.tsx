import React, {ChangeEvent, createRef} from 'react';
import {Post} from './Post';
import {PostType, ActionsType} from './../../redux/store';

type PostsPropsType = {
    arrayPosts: Array<PostType>;
    postText: string;
    dispatch: (action: ActionsType) => void;
}

export const Posts = (props: PostsPropsType) => {

    const posts = props.arrayPosts.map((post: PostType) => <Post postText={post.postText}
                                                                 likesCount={post.likesCount}/>);

    const textRef = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.dispatch({type: 'ADD_POST'});
        props.dispatch({type: 'UPDATE_POST', newPostText: ''});
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'UPDATE_POST', newPostText: event.currentTarget.value});
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
