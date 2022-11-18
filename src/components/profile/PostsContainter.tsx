import React, {ChangeEvent, createRef} from 'react';
import {Post} from './Post';
import {PostType, ActionsType} from './../../redux/store';
import { AddPostActionCreator, UpdatePostActionCreator} from './../../redux/reducers/profile-reducer';
import {Posts} from './../../components/profile/Posts';

type PropsType = {
    arrayPosts: Array<PostType>;
    postText: string;
    dispatch: (action: ActionsType) => void;
}

export const PostsContainer: React.FC<PropsType> = (props) => {

    // const posts = props.arrayPosts.map((post: PostType) => <Post postText={post.postText}
    //                                                              likesCount={post.likesCount}/>);

    // const textRef = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.dispatch(AddPostActionCreator());
        props.dispatch(UpdatePostActionCreator(''));
    }

    const onChangeHandler = (nePostText: string) => {
        props.dispatch(UpdatePostActionCreator(nePostText));
    }

    return <Posts arrayPosts={props.arrayPosts} postText={props.postText} addPost={addPost} onChangeHandler={onChangeHandler}/>
};
