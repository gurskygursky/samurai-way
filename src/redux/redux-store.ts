import {combineReducers, createStore, Store} from 'redux'
import {DialogsActionsType, DialogsReducer} from './../redux/reducers/dialogs-reducer';
import {ProfileActionsType, ProfileReducer} from './../redux/reducers/profile-reducer';

let rootReducer = combineReducers({
    DialogsReducer,
    ProfileReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export let reduxStore = createStore(rootReducer);

type ActionTypes = ProfileActionsType | DialogsActionsType;

export type ReduxStoreType = Store<RootReducerType, ActionTypes>;


