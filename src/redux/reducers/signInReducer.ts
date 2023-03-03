import {SignInDataType} from "./../../components/login/index";
import {Dispatch} from "redux";
import {AuthAPI} from "./../../API/api";
import {requestIsFetching} from "./users-reducer";

type InitialStateType = {
    signInData: SignInDataType,
    userId: number | null,
}
const initialState: InitialStateType = {
    signInData: {} as SignInDataType,
    userId: null
}
export const signInReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SIGN_IN': {
            return {
                ...state, signInData: action.payload.signInData, userId: action.payload.userId
            }
        }
        default:
            return state;
    }
};


//actions
export const signInAC = (signInData: SignInDataType, userId: number) => {
    return {
        type: 'SIGN_IN',
        payload: {
            signInData, userId
        }
    } as const
}

export const signInThunk = (signInData: SignInDataType) => {
    return (dispatch: Dispatch) => {
        dispatch(requestIsFetching(true));
        AuthAPI.signIn(signInData.email, signInData.password, signInData.rememberMe)
            .then((data: any) => {
                if (data.resultCode === 0) {
                    dispatch(signInAC(signInData, data.data.userId));
                    dispatch(requestIsFetching(false));
                }
                if (data.resultCode === 1) {

                }
            });
    }
}
export const signOutThunk = () => {
    return (dispatch: Dispatch) => {
        dispatch(requestIsFetching(true));
        AuthAPI.signOut()
            .then((data: any) => {
                if (data.resultCode === 0) {
                    dispatch(signInAC(data, data.data.userId));
                    dispatch(requestIsFetching(false));
                }
                if (data.resultCode === 1) {

                }
            });
    }
}
//types
type SignInActionType = ReturnType<typeof signInAC>;

type ActionsType = SignInActionType;
