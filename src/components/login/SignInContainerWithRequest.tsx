import React from "react";
import {instance} from "./../../API/users-api";
import {SignIn} from "./../../components/login/SignIn";
import {SignInContainerPropsType} from "./../../components/login/SignInContainer";

export class SignInContainerWithRequest extends React.Component<SignInContainerPropsType, any> {
    componentDidMount() {
        // this.props.requestIsFetching(true);
        instance.get(`auth/me`)
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.requestIsAuth(true);
                    this.props.setAuthUserData(res.data.data);
                }
                if (res.data.resultCode === 1) {
                    this.props.requestIsAuth(false);
                }
            })
    }

    componentDidUpdate(prevProps: Readonly<SignInContainerPropsType>, prevState: Readonly<any>, snapshot?: any) {
        instance.get(`auth/me`)
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.requestIsAuth(true);
                    this.props.setAuthUserData(res.data.data);
                }
                if (res.data.resultCode === 1) {
                    this.props.requestIsAuth(false)
                }
            })
    }

    render() {
        return (
            <>
                <SignIn isAuth={this.props.isAuth} authData={this.props.authData} />
            </>
        )
    }
}