import {combineReducers, createStore} from 'redux'
import {DialogsReducer} from './reducers/dialogs-reducer';
import {ProfileReducer} from './reducers/profile-reducer';
import {usersReducer} from './reducers/users-reducer';

const rootReducer = combineReducers({
    DialogsReducer,
    ProfileReducer,
    usersReducer,
});

export let store = createStore(rootReducer);

export type RootStoreType = ReturnType<typeof store.getState>
