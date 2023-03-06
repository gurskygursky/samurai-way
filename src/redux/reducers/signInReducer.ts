import {SignInDataType} from "./../../components/login/index";
import {Dispatch} from "redux";
import {AuthAPI} from "./../../API/api";
import {requestIsFetching} from "./users-reducer";

type InitialStateType = {
    signInData: SignInDataType,
}
const initialState: InitialStateType = {
    signInData: {} as SignInDataType,
}
export const signInReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SIGN_IN': {
            return {
                ...state, signInData: action.payload.signInData
            }
        }
        default:
            return state;
    }
};


//actions
export const signInAC = (signInData: SignInDataType) => {
    return {
        type: 'SIGN_IN',
        payload: {
            signInData
        }
    } as const
}

export const signInThunk = (signInData: SignInDataType) => {
    return (dispatch: Dispatch) => {
        dispatch(requestIsFetching(true));
        AuthAPI.signIn(signInData.email, signInData.password, signInData.rememberMe)
            .then((data: any) => {
                if (data.resultCode === 0) {
                    dispatch(signInAC(signInData));
                    dispatch(requestIsFetching(false));
                }
            });
    }
}
// export const signInThunk =
//     (signInData: SignInDataType): ThunkAction<void, RootStoreType, unknown, AnyAction> =>
//         async dispatch => {
//             dispatch(requestIsFetching(true));
//             await AuthAPI.signIn(signInData.email, signInData.password, signInData.rememberMe)
//                     dispatch(signInAC(signInData, data.data.userId));
//             dispatch(requestIsFetching(false));
//         }
export const signOutThunk = () => {
    return (dispatch: Dispatch) => {
        dispatch(requestIsFetching(true));
        AuthAPI.signOut()
            .then((data: any) => {
                if (data.resultCode === 0) {
                    dispatch(signInAC(data.data));
                    dispatch(requestIsFetching(false));
                }
            });
    }
}
//types
type SignInActionType = ReturnType<typeof signInAC>;

type ActionsType = SignInActionType;
