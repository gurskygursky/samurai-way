import {ActionsType, ProfilePageType} from './../../redux/store';

enum ACTIONS {
    ADD_POST = 'ADD_POST',
    UPDATE_POST_TEXT = 'UPDATE_POST_TEXT',
}

const initialState: ProfilePageType = {
        arrayPosts: [
            {id: 1, postText: `It's my first post`, likesCount: 888},
            {id: 2, postText: `Hello, IT-INCUBATOR!`, likesCount: 777},
            {id: 3, postText: `React - kabzda kak prosto!`, likesCount: 100500},
            {id: 4, postText: `YO!`, likesCount: 333},
        ],
        postText: 'react - kabzda!',
}

export const ProfileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ACTIONS.ADD_POST: {
            state.arrayPosts.push({id: 888, postText: state.postText, likesCount: 0});
            return state;
        }
        case ACTIONS.UPDATE_POST_TEXT: {
            state.postText = action.newPostText;
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