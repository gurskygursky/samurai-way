import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {RootStoreType} from "./../redux/store";


type MapStateToPropsType = {
    isAuth: boolean;
}

const mapStateToProps = (state: RootStoreType): MapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth,
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent: React.FC<MapStateToPropsType> = ({isAuth, ...restProps}) => {
        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent);
}
