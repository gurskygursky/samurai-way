import {ActionsType, RootStateType} from './../../redux/store';

enum ACTIONS {
    ADD_POST = 'ADD_POST',
    UPDATE_POST_TEXT = 'UPDATE_POST_TEXT',
}


export const ProfileReducer = (state: RootStateType, action: ActionsType) => {
    switch (action.type) {
        case ACTIONS.ADD_POST: {
            state.profile.arrayPosts.push({id: 888, postText: state.profile.postText, likesCount: 0});
            return state;
        }
        case ACTIONS.UPDATE_POST_TEXT: {
            state.profile.postText = action.newPostText;
            return state;
        }
        default: return state;
    }
}

// actions
export const AddPostActionCreator = () => {
    return {
        type: ACTIONS.ADD_POST,
    } as const
}
export const UpdatePostActionCreator = (newPostText: string) => {
    return {
        type: ACTIONS.UPDATE_POST_TEXT,
        newPostText,
    } as const
}

// actions types
type AddPostActionType = ReturnType<typeof AddPostActionCreator>;
type UpdatePostActionType = ReturnType<typeof UpdatePostActionCreator>;
export type ProfileActionsType = AddPostActionType | UpdatePostActionType;