import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {requestIsAuth, setAuthUserData} from "./../../redux/reducers/auth-reducer";
import {RootStoreType} from "./../../redux/store";
import {AuthUserDataResponseType} from "./../../redux/types";
import {AuthAPI} from "./../../API/api";
import {SignIn} from "./../login/SignIn";


type mapStateToPropsType = {
    authData: AuthUserDataResponseType,
    isAuth: boolean;
}
const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        authData: state.authReducer.authData,
        isAuth: state.authReducer.isAuth,
    }
}

export class SignInContainerWithRequest extends React.Component<SignInContainerPropsType, any> {
    componentDidMount() {
        // this.props.requestIsFetching(true);
        AuthAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.requestIsAuth(true);
                    this.props.setAuthUserData(data.data);
                }
                if (data.resultCode === 1) {
                    this.props.requestIsAuth(false);
                }
            })
    }

    render() {
        return (
            <>
                <SignIn isAuth={this.props.isAuth} authData={this.props.authData}/>
            </>
        )
    }
}

export const ConnectComponent = connect(mapStateToProps, {
    setAuthUserData, requestIsAuth
});

export type SignInContainerPropsType = ConnectedProps<typeof ConnectComponent>;
export const SignInContainer = ConnectComponent(SignInContainerWithRequest);
