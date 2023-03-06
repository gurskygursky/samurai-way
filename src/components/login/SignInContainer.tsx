import React, {ComponentType} from "react";
import {connect, ConnectedProps, useDispatch} from "react-redux";
import {requestIsAuth, setAuthUserData, isAuthMe} from "./../../redux/reducers/auth-reducer";
import {RootStoreType} from "./../../redux/store";
import {AuthUserDataResponseType, ProfileResponseType} from "./../../redux/types";
import {compose} from "redux";
import {SignIn} from "./SignIn";
import {Profile} from "./../../components/profile/Profile";


type mapStateToPropsType = {
    authData: AuthUserDataResponseType,
    isAuth: boolean;
    profile: ProfileResponseType;
    status: string
}
const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        authData: state.authReducer.authData,
        isAuth: state.authReducer.isAuth,
        profile: state.ProfileReducer.profile,
        status: state.ProfileReducer.status,
    }
}

export class SignInContainerWithRequest extends React.Component<SignInContainerPropsType, any> {
    componentDidMount() {
        this.props.isAuthMe();
    }

    render() {
        return (
            <>
                {this.props.isAuth
                    ? <Profile {...this.props}/>
                    : <SignIn {...this.props}/>
                }
                {/*<SignIn isAuth={this.props.isAuth} authData={this.props.authData}/>*/}
            </>
        )
    }
}

export const ConnectComponent = connect(mapStateToProps, {
    setAuthUserData, requestIsAuth, isAuthMe,
});

export type SignInContainerPropsType = ConnectedProps<typeof ConnectComponent>;
export const SignInContainer = compose<ComponentType>(ConnectComponent)(SignInContainerWithRequest);
