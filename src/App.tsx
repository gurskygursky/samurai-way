import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Footer} from './components/footer/Footer';
import {Route} from 'react-router-dom';
import {Dialogs} from './components/messages/Dialogs';
import {ActionsType, RootStateType} from './redux/store';

type AppPropsType = {
    state: RootStateType;
    postText: string;
    dispatch: (action: ActionsType) => void;
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Route exact={true} path={'/profile'} render={() => <Profile profile={props.state.profile}
                                                                         postText={props.postText}
                                                                         dispatch={props.dispatch}/>}/>
            <Route exact={true} path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogs}/>}/>
            <Footer/>
        </div>
    );
};
