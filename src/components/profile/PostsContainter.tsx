import React, {ChangeEvent, createRef} from 'react';
import {Post} from './Post';
import {PostType, ActionsType, ProfilePageType} from './../../redux/store';
import { AddPostActionCreator, UpdatePostActionCreator} from './../../redux/reducers/profile-reducer';
import {Posts} from './../../components/profile/Posts';

type PropsType = {
    profile: ProfilePageType;
    // arrayPosts: Array<PostType>;
    // postText: string;
    dispatch: (action: ActionsType) => void;
}

export const PostsContainer: React.FC<PropsType> = (props) => {

    const posts = props.profile.arrayPosts.map((post: PostType) => <Post postText={post.postText}
                                                                 likesCount={post.likesCount}/>);

    // const textRef = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.dispatch(AddPostActionCreator());
        props.dispatch(UpdatePostActionCreator(''));
    }

    const onChangeHandler = (nePostText: string) => {
        props.dispatch(UpdatePostActionCreator(nePostText));
    }

    return <Posts addPost={addPost} onChangeHandler={onChangeHandler} profile={props.profile}/>
};
