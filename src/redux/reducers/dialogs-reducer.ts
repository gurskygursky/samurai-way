import {DialogsPageType} from 'src/redux/types';

enum ACTIONS {
    SEND_MESSAGE = 'SEND_MESSAGE',
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
}

export const DialogsReducer = (state = initialState, action: DialogsActionsType) => {
    switch (action.type) {
        case ACTIONS.SEND_MESSAGE: {
            return {
                ...state,
                arrayMessages: [...state.arrayMessages, {id: new Date().getTime(), message: action.payload.messageText}],
            }
        }
        default:
            return state;
    }
}

// actions
export const SendMessageActionCreator = (messageText: string) => {
    return {
        type: ACTIONS.SEND_MESSAGE,
        payload: {messageText},
    } as const
}

// actions types
type SendMessageActionType = ReturnType<typeof SendMessageActionCreator>;
export type DialogsActionsType = SendMessageActionType;
