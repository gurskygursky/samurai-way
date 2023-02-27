import {Dialogs} from 'src/components/messages/dialogs/Dialogs';
import {connect, ConnectedProps} from 'react-redux';
import {RootStoreType} from 'src/redux/store';
import {UserType} from './../../../redux/types';
import {compose} from "redux";
import { WithAuthRedirect } from './../../../hoc/WithAuthRedirect';
import {ComponentType} from "react";


const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        arrayUsers: state.DialogsReducer.arrayUsers,
    }
}

type mapStateToPropsType = {
    arrayUsers: UserType[];
}

export type DialogsContainerType = mapStateToPropsType;

const ConnectComponent = connect(mapStateToProps);
export const DialogsContainer = compose<ComponentType>(ConnectComponent, WithAuthRedirect)(Dialogs);