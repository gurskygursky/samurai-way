import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {SendMessageActionCreator} from './../../redux/reducers/dialogs-reducer';
import { MessageType } from 'src/redux/my-first-store';
import {Messages} from './../../components/messages/Messages';
import {RootStoreType} from './../../redux/store';

const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        arrayMessages: state.DialogsReducer.arrayMessages,
        // messageText: state.DialogsReducer.messageText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (messageText: string) => {
            dispatch(SendMessageActionCreator(messageText));
        },
        // onChangeHandler: (messageText: string) => {
        //     dispatch(UpdateMessageTextActionCreator(messageText));
        // },
    }
}

type mapStateToPropsType = {
    arrayMessages: MessageType[];
    // messageText: string;
}
type mapDispatchToPropsType = {
    sendMessage: (messageText: string) => void;
    // onChangeHandler: (messageText: string) => void;
}
export type MessagesContainerType = mapStateToPropsType & mapDispatchToPropsType;

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);