import {combineReducers, createStore} from 'redux'
import {DialogsReducer} from './../redux/reducers/dialogs-reducer';
import {ProfileReducer} from './../redux/reducers/profile-reducer';

let rootReducer = combineReducers({
    DialogsReducer,
    ProfileReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export let reduxStore = createStore(rootReducer);
