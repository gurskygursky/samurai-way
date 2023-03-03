import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Footer} from './components/footer/Footer';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './components/messages/dialogs/DialogsContainer';
import {ProfileContainer} from './components/profile/ProfileContainer';
import {UsersContainer} from './components/users/UsersContainer';
import {SignInContainer} from "./components/login/SignInContainer";

export const App: React.FC = () => {
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
};
