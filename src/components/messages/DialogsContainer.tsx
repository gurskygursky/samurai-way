import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {UserType} from 'src/redux/my-first-store';
import {RootStoreType} from './../../redux/store';


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