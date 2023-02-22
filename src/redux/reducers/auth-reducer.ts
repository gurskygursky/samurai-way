import {AuthDataResponseType, AuthUserDataResponseType} from 'src/redux/types';

enum ACTIONS {
    SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',
    REQUEST_IS_AUTH = 'REQUEST_IS_AUTH',
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

export const authReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ACTIONS.SET_AUTH_USER_DATA: {
            return {
                ...state.authData,
                authData: action.payload.authData,
            }
        }
        case ACTIONS.REQUEST_IS_AUTH: {
            return {
                ...state,
                 isAuth: action.payload.isAuth,
            }
        }
        default:
            return state;
    }
}

// actions
export const setAuthUserData = (authData: AuthDataResponseType) => {
    return {
        type: ACTIONS.SET_AUTH_USER_DATA,
        payload: {authData},
    } as const
}
export const requestIsAuth = (isAuth: boolean) => {
    return {
        type: ACTIONS.REQUEST_IS_AUTH,
        payload: {isAuth},
    } as const
}

// actions types
type SetAuthUserDataType = ReturnType<typeof setAuthUserData>;
type RequestIsAuthType = ReturnType<typeof requestIsAuth>;
export type ActionsType = SetAuthUserDataType | RequestIsAuthType;
