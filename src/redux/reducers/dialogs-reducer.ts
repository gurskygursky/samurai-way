import {ActionsType, DialogsPageType} from './../../redux/store';

enum ACTIONS {
    SEND_MESSAGE = 'SEND_MESSAGE',
    UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT',
}

let initialState: DialogsPageType = {
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
}

export const DialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ACTIONS.SEND_MESSAGE: {
            state.arrayMessages.push({id: 7, message: state.messageText});
            return state;
        }
        case ACTIONS.UPDATE_MESSAGE_TEXT: {
            state.messageText = action.newMessageText;
            return state;
        }
        default:
            return state;
    }
}

// actions
export const SendMessageActionCreator = () => {
    return {
        type: ACTIONS.SEND_MESSAGE,
    } as const
}
export const UpdateMessageTextActionCreator = (newMessageText: string) => {
    return {
        type: ACTIONS.UPDATE_MESSAGE_TEXT,
        newMessageText,
    } as const
}

// actions types

type SendMessageActionType = ReturnType<typeof SendMessageActionCreator>;
type UpdateMessageTextActionType = ReturnType<typeof UpdateMessageTextActionCreator>;
export type DialogsActionsType = SendMessageActionType | UpdateMessageTextActionType;
