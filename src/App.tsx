import React, { ComponentType } from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Footer} from './components/footer/Footer';
import {Route, withRouter} from 'react-router-dom';
import {DialogsContainer} from './components/messages/dialogs/DialogsContainer';
import {ProfileContainer} from './components/profile/ProfileContainer';
import {UsersContainer} from './components/users/UsersContainer';
import {SignInContainer} from "./components/login/SignInContainer";
import {appInitializingThunk} from "./redux/reducers/app-reducer";
import { compose } from 'redux';
import {connect, ConnectedProps } from 'react-redux';
import {RootStoreType} from "./redux/store";

export class App extends React.Component<AppContainerType> {

    componentDidMount() {
        this.props.appInitializingThunk(this.props.isInitialized);

    }

    render() {

        return (
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <Route exact={true} path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                <Route exact={true} path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route exact={true} path={'/users'} render={() => <UsersContainer/>}/>
                <Route exact={true} path={'/login'} render={() => <SignInContainer/>}/>
                <Footer/>
            </div>
        );
    }
}


type mapStateToPropsType = {
    isInitialized: boolean,
}
type AppContainerType = AppConnectContainerType & mapStateToPropsType;

const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        isInitialized: state.appReducer.isInitialized,
    }
}


const ConnectComponent = connect(mapStateToProps, {
    appInitializingThunk,
})

export type AppConnectContainerType = ConnectedProps<typeof ConnectComponent>

export const AppContainer = compose<ComponentType>(
    ConnectComponent,
    withRouter,
)(App);