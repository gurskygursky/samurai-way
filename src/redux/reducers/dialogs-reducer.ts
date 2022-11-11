import {ActionsType, RootStateType} from './../../redux/store';

export const DialogsReducer = (state: RootStateType, action: ActionsType) => {
    switch (action.type) {
        case ACTIONS.SEND_MESSAGE: {
            state.dialogs.arrayMessages.push({id: 7, message: state.dialogs.messageText});
            return state;
        }
        case ACTIONS.UPDATE_MESSAGE_TEXT: {
            state.dialogs.messageText = action.newMessageText;
            return state;
        }
        default:
            return state;
    }
}

// actions
enum ACTIONS {
    SEND_MESSAGE = 'SEND_MESSAGE',
    UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT',
}

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
