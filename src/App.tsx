import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Footer} from './components/footer/Footer';
import {Route} from 'react-router-dom';
import {Dialogs} from './components/messages/Dialogs';
import {ActionsType, RootStateType} from 'src/redux/my-first-store';
import {store} from 'src/redux/store';
import {DialogsContainer} from './components/messages/DialogsContainer';
import {useSelector} from 'react-redux';
import { ProfileContainer } from './components/profile/ProfileContainer';

type AppPropsType = {
    // state: RootStateType;
    // postText: string;
    // messageText: string;
    // dispatch: (action: ActionsType) => void;
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Route exact={true} path={'/profile'} render={() => <ProfileContainer/>
            //     <Profile profile={props.store.ProfileReducer}
            //                                                              // postText={props.postText}
            //                                                              dispatch={props.store.dispatch}
            // />
            }/>
            <Route exact={true} path={'/dialogs'} render={() => <DialogsContainer/>
                // <Dialogs dialogs={props.store.getState().DialogsReducer}
                //                                                          messageText={props.store.getState().DialogsReducer.messageText}
                //                                                          dispatch={props.store.dispatch}/>
            }/>
            <Footer/>
        </div>
    );
};
