import React, {ChangeEvent, createRef} from 'react';
import {Post} from './Post';
import {PostType, ActionsType, UpdatePostActionCreator, AddPostActionCreator} from './../../redux/store';

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
        props.dispatch(AddPostActionCreator());
        props.dispatch(UpdatePostActionCreator(''));
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdatePostActionCreator(event.currentTarget.value));
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
