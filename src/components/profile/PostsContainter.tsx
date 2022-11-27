import React, {ChangeEvent, createRef} from 'react';
import {Post} from './Post';
import {PostType, ActionsType, ProfilePageType} from 'src/redux/my-first-store';
import {AddPostActionCreator, UpdatePostActionCreator} from './../../redux/reducers/profile-reducer';
import {Posts} from './../../components/profile/Posts';
import {connect} from 'react-redux';
import {RootStoreType} from './../../redux/store';
import {Dispatch} from 'redux';

// type PropsType = {
//     profile: ProfilePageType;
//     // arrayPosts: Array<PostType>;
//     // postText: string;
//     dispatch: (action: ActionsType) => void;
// }
//
// export const PostsContainer: React.FC<PropsType> = (props) => {
//
//     const posts = props.profile.arrayPosts.map((post: PostType) => <Post postText={post.postText}
//                                                                  likesCount={post.likesCount}/>);
//
//     // const textRef = createRef<HTMLTextAreaElement>();
//
//     const addPost = () => {
//         props.dispatch(AddPostActionCreator());
//         props.dispatch(UpdatePostActionCreator(''));
//     }
//
//     const onChangeHandler = (nePostText: string) => {
//         props.dispatch(UpdatePostActionCreator(nePostText));
//     }
//
//     return <Posts addPost={addPost} onChangeHandler={onChangeHandler} profile={props.profile}/>
// };


type mapStateToPropsType = {
    arrayPosts: Array<PostType>;
    postText: string;
}

type mapDispatchToPropsType = {
    addPost: () => void;
    onChangeHandler: (newPostText: string) => void;
}

export type PostsContainerType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        arrayPosts: state.ProfileReducer.arrayPosts,
        postText: state.ProfileReducer.postText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(AddPostActionCreator());
            // dispatch(UpdatePostActionCreator(''));
        },
        onChangeHandler: (newPostText: string) => {
            dispatch(UpdatePostActionCreator(newPostText));
        },

    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
