import {ProfilePageType} from 'src/redux/types';

enum ACTIONS {
    ADD_POST = 'ADD_POST',
}

const initialState: ProfilePageType = {
    arrayPosts: [
        {id: 1, postText: `It's my first post`, likesCount: 888},
        {id: 2, postText: `Hello, IT-INCUBATOR!`, likesCount: 777},
        {id: 3, postText: `React - kabzda kak prosto!`, likesCount: 100500},
        {id: 4, postText: `YO!`, likesCount: 333},
    ],
}

export const ProfileReducer = (state = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case ACTIONS.ADD_POST: {
            return {
                ...state,
                arrayPosts: [...state.arrayPosts, {
                    id: new Date().getTime(),
                    postText: action.payload.postText,
                    likesCount: new Date().getDay()
                }]
            }
        }
        default:
            return state;
    }
}

// actions
export const AddPostActionCreator = (postText: string) => {
    return {
        type: ACTIONS.ADD_POST,
        payload: {postText},
    } as const
}

// actions types
type AddPostActionType = ReturnType<typeof AddPostActionCreator>;
export type ProfileActionsType = AddPostActionType;