import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {SendMessageActionCreator} from './../../redux/reducers/dialogs-reducer';
import {MessageType} from 'src/redux/types';
import {Messages} from './../../components/messages/Messages';
import {RootStoreType} from './../../redux/store';

const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        arrayMessages: state.DialogsReducer.arrayMessages,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (messageText: string) => {
            dispatch(SendMessageActionCreator(messageText));
        },
    }
}

type mapStateToPropsType = {
    arrayMessages: MessageType[];
}
type mapDispatchToPropsType = {
    sendMessage: (messageText: string) => void;
}
export type MessagesContainerType = mapStateToPropsType & mapDispatchToPropsType;

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);