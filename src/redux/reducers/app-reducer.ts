import {ThunkAction} from 'redux-thunk';
import {RootStoreType} from "./../../redux/store";
import {isAuthMe} from "./../../redux/reducers/auth-reducer";


type InitialStateType = {
    isInitialized: boolean,
}
let initialState: InitialStateType = {
    isInitialized: false,
}

export const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'IS_INITIALIZED': {
            return {
                ...state,
                isInitialized: true,
            }
        }
        default:
            return state;
    }
}

// actions
export const isInitializedAC = (isInitialized: boolean) => {
    return {
        type: 'IS_INITIALIZED',
        payload: {isInitialized},
    } as const
}


//thunk

export const appInitializingThunk = (isInitialized: boolean): ThunkAction<void, RootStoreType, unknown, ActionsTypes> => (dispatch) => {
    const promise = dispatch(isAuthMe());
    promise.then(() => {
        dispatch(isInitializedAC(isInitialized))
        console.log(dispatch(isInitializedAC(isInitialized)))
    })
}

// actions types
type isInitializedActionType = ReturnType<typeof isInitializedAC>;
export type ActionsTypes = isInitializedActionType;
