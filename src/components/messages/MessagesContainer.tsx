import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {SendMessageActionCreator} from './../../redux/reducers/dialogs-reducer';
import {MessageType} from 'src/redux/types';
import {Messages} from './../../components/messages/Messages';
import {RootStoreType} from './../../redux/store';
import {WithAuthRedirect} from "./../../hoc/WithAuthRedirect";

const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        arrayMessages: state.DialogsReducer.arrayMessages,
        isAuth: state.authReducer.isAuth,
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
    isAuth: boolean;
}
type mapDispatchToPropsType = {
    sendMessage: (messageText: string) => void;
}
export type MessagesContainerType = mapStateToPropsType & mapDispatchToPropsType;

export const MessagesContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Messages));