import React, {ComponentType} from "react";
import {connect, ConnectedProps} from "react-redux";
import {requestIsAuth, setAuthUserData, isAuthMe} from "./../../redux/reducers/auth-reducer";
import {RootStoreType} from "./../../redux/store";
import {AuthUserDataResponseType} from "./../../redux/types";
import {compose} from "redux";
import {SignIn} from "./SignIn";
import {SignInDataType} from "./index";


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
        this.props.isAuthMe();
    }

    handleSubmit = (signInData: SignInDataType) => {
        console.log(signInData);
    }
    reset = () => {

    }
    render() {
        return (
            <>
                {/*<SignIn isAuth={this.props.isAuth} authData={this.props.authData}/>*/}
                <SignIn handleSubmit={this.handleSubmit} reset={this.reset} />
            </>
        )
    }
}

export const ConnectComponent = connect(mapStateToProps, {
    setAuthUserData, requestIsAuth, isAuthMe,
});

export type SignInContainerPropsType = ConnectedProps<typeof ConnectComponent>;
export const SignInContainer = compose<ComponentType>(ConnectComponent)(SignInContainerWithRequest);
