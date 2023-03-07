import {AuthDataResponseType, AuthUserDataResponseType} from 'src/redux/types';
import {Dispatch} from "redux";
import {AuthAPI} from "./../../API/api";
import {SignInDataType} from "./../../components/login";
import {ThunkAction} from 'redux-thunk';
import {RootStoreType} from "./../../redux/store";

enum ACTIONS {
    SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',
    SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE',
}

type InitialStateType = {
    authData: AuthUserDataResponseType,
    messages: Array<string>,
    fieldsErrors: Array<string>,
    resultCode: number | null,
    isAuth: boolean,
}
let initialState: InitialStateType = {
    authData: {
        id: null,
        login: null,
        email: null,
    } as AuthUserDataResponseType,
    messages: [''],
    fieldsErrors: [''],
    resultCode: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS.SET_AUTH_USER_DATA: {
            return {
                ...state,
                authData: action.payload.authData,
                isAuth: action.payload.isAuth,
            }
        }
        case ACTIONS.SET_ERROR_MESSAGE: {
            return {
                ...state,
                messages: [action.payload.errorMessage],
            }
        }
        default:
            return state;
    }
}

// actions
export const setAuthUserData = (authData: AuthUserDataResponseType, isAuth: boolean) => {
    return {
        type: ACTIONS.SET_AUTH_USER_DATA,
        payload: {authData, isAuth},
    } as const
}
export const setErrorMessage = (errorMessage: string) => {
    return {
        type: ACTIONS.SET_ERROR_MESSAGE,
        payload: {errorMessage},
    } as const
}

//thunk
export const isAuthMe = () => {
    return (dispatch: Dispatch) => {
        AuthAPI.auth()
            .then((data: AuthDataResponseType) => {
                if (data.resultCode === 0) {
                    console.log(data.data)
                    dispatch(setAuthUserData(data.data, true));
                }
            })
    }
}
export const signInThunk = (signInData: SignInDataType): ThunkAction<void, RootStoreType, unknown, ActionsType> =>
    async (dispatch) => {
        const response = await AuthAPI.signIn(signInData.email, signInData.password, signInData.rememberMe)
        if (response.data.resultCode === 0) {
            await dispatch(isAuthMe());
        }
    }

export const signOutThunk = () => async (dispatch: Dispatch) => {
    const response = await AuthAPI.signOut()
    if (response.data.resultCode === 0) {
        console.log(response.data.data);
        dispatch(setAuthUserData({id: null, login: null, email: null}, false))
    }
}

// actions types
type SetAuthUserActionType = ReturnType<typeof setAuthUserData>;
type setErrorMessageActionType = ReturnType<typeof setErrorMessage>;
export type ActionsType = SetAuthUserActionType | setErrorMessageActionType;
