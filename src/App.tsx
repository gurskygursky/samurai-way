import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Footer} from './components/footer/Footer';
import {Messages} from './components/messages/Messages';
import {Route} from 'react-router-dom';

export const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Route exact path={'/profile'} component={Profile}/>
            <Route exact path={'/messages'} component={Messages}/>
            {/*<Profile/>*/}
            {/*<Messages/>*/}
            <Footer/>
        </div>
    );
}
