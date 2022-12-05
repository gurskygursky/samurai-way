import {combineReducers, createStore} from 'redux'
import {DialogsReducer} from './../redux/reducers/dialogs-reducer';
import {ProfileReducer} from './../redux/reducers/profile-reducer';

const rootReducer = combineReducers({
    DialogsReducer,
    ProfileReducer,
});

export let store = createStore(rootReducer);

export type RootStoreType = ReturnType<typeof store.getState>
