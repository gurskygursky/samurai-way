import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Footer} from './components/footer/Footer';
import {Route} from 'react-router-dom';
import { Dialogs } from './components/messages/Dialogs';

export const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Route exact path={'/profile'} component={Profile}/>
            {/*<Route exact path={'/dialogs'} component={Dialogs}/>*/}
            <Route exact path={'/dialogs'} component={Dialogs}/>
            {/*<Profile/>*/}
            {/*<Messages/>*/}
            <Footer/>
        </div>
    );
}
