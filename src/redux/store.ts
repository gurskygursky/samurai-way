import {combineReducers, createStore} from 'redux'
import {DialogsActionsType, DialogsReducer} from './../redux/reducers/dialogs-reducer';
import {ProfileActionsType, ProfileReducer} from './../redux/reducers/profile-reducer';

let rootReducer = combineReducers({
    DialogsReducer,
    ProfileReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export let store = createStore(rootReducer);

type ActionTypes = ProfileActionsType | DialogsActionsType;

// export type RootStoreType = Store<RootReducerType, ActionTypes>;

// // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStoreType = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch