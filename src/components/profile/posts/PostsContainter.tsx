import {PostType} from './../../../redux/types';
import {AddPostActionCreator} from 'src/redux/reducers/profile-reducer';
import {Posts} from 'src/components/profile/posts/Posts';
import {connect} from 'react-redux';
import {RootStoreType} from 'src/redux/store';
import {Dispatch} from 'redux';

type mapStateToPropsType = {
    arrayPosts: Array<PostType>;
}

type mapDispatchToPropsType = {
    addPost: (postText: string) => void;
}

export type PostsContainerType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        arrayPosts: state.ProfileReducer.arrayPosts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (postText: string) => {
            dispatch(AddPostActionCreator(postText));
        },
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
