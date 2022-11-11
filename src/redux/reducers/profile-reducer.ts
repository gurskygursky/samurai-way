import {ActionsType, RootStateType} from './../../redux/store';

const ProfileReducer = (state: RootStateType, action: ActionsType) => {
    switch (action.type) {
        case 'ADD_POST': {
            return state;
        }
        case 'UPDATE_POST': {
            return state;
        }
        default: return state;
    }
}