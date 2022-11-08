export type PostType = {
    id: number;
    postText: string;
    likesCount: number;
}
export type UserType = {
    id: number;
    name: string;
}
export type MessageType = {
    id: number;
    message: string;
}
export type ProfilePageType = {
    arrayPosts: Array<PostType>;
    postText: string;
}
export type DialogsPageType = {
    arrayUsers: Array<UserType>;
    arrayMessages: Array<MessageType>;
    messageText: string;
}
export type RootStateType = {
    profile: ProfilePageType;
    dialogs: DialogsPageType;
};

export type StoreType = {
    _state: RootStateType;
    _callSubscriber: () => void;
    getState: () => RootStateType;
    subscribe: (observer: () => void) => void;
    dispatch: (action: ActionsType) => void;
    _addPost: () => void;
    _updatePostHandler: (newPostText: string) => void;
    _sendMessage: () => void;
    _updateMessageText: (newMessageText: string) => void;
}
export type ActionsType = AddPostActionType | UpdatePostActionType | SendMessageActionType | UpdateMessageTextActionType;

type AddPostActionType = ReturnType<typeof AddPostActionCreator>;
type UpdatePostActionType = ReturnType<typeof UpdatePostActionCreator>;
type SendMessageActionType = ReturnType<typeof SendMessageActionCreator>;
type UpdateMessageTextActionType = ReturnType<typeof UpdateMessageTextActionCreator>;

export const AddPostActionCreator = () => {
    return {
        type: 'ADD_POST',
    } as const
}
export const UpdatePostActionCreator = (newPostText: string) => {
    return {
        type: 'UPDATE_POST',
        newPostText,
    } as const
}
export const SendMessageActionCreator = () => {
    return {
        type: 'SEND_MESSAGE',
    } as const
}
export const UpdateMessageTextActionCreator = (newMessageText: string) => {
    return {
        type: 'UPDATE_MESSAGE_TEXT',
        newMessageText,
    } as const
}

export let store: StoreType = {
    _state: {
        profile: {
            arrayPosts: [
                {id: 1, postText: `It's my first post`, likesCount: 888},
                {id: 2, postText: `Hello, IT-INCUBATOR!`, likesCount: 777},
                {id: 3, postText: `React - kabzda kak prosto!`, likesCount: 100500},
                {id: 4, postText: `YO!`, likesCount: 333},
            ],
            postText: 'react - kabzda!',
        },
        dialogs: {
            arrayUsers: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Igor'},
                {id: 3, name: 'Katya'},
                {id: 4, name: 'Valera'},
                {id: 5, name: 'Viktor'},
            ],
            arrayMessages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'Hello, IT-INC!'},
                {id: 3, message: 'How are you?'},
            ],
            messageText: '',
        },
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    _addPost () {
        this._state.profile.arrayPosts.push({id: 5, postText: this._state.profile.postText, likesCount: 0});
        console.log(this._state.profile.arrayPosts);
        this._callSubscriber();
    },
    _updatePostHandler (newPostText: string) {
        this._state.profile.postText = newPostText;
        console.log(this._state.profile.postText);
        this._callSubscriber();
    },
    _sendMessage () {
        this._state.dialogs.arrayMessages.push({id: 7, message: this._state.dialogs.messageText});
        this._callSubscriber();
    },
    _updateMessageText (newMessageText: string) {
        this._state.dialogs.messageText = newMessageText;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD_POST') {
            this._addPost();
            // this._state.profile.arrayPosts.push({id: 5, postText: this._state.profile.postText, likesCount: 0});
            // console.log(this._state.profile.arrayPosts);
            // this._callSubscriber();
        }
        if (action.type === 'UPDATE_POST') {
            this._updatePostHandler(action.newPostText);
            // this._state.profile.postText = action.newPostText;
            // console.log(this._state.profile.postText);
            // this._callSubscriber();
        }
        if (action.type === 'SEND_MESSAGE') {
            this._sendMessage();
        }
        if (action.type === 'UPDATE_MESSAGE_TEXT') {
            this._updateMessageText(action.newMessageText);
        }
    },
};
