import {Dialogs} from 'src/components/messages/dialogs/Dialogs';
import {connect} from 'react-redux';
import {RootStoreType} from 'src/redux/store';
import {UserType} from './../../../redux/types';


const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        arrayUsers: state.DialogsReducer.arrayUsers,
    }
}

type mapStateToPropsType = {
    arrayUsers: UserType[];
}

export type DialogsContainerType = mapStateToPropsType;

export const DialogsContainer = connect(mapStateToProps)(Dialogs);