import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Footer} from './components/footer/Footer';
import {Route} from 'react-router-dom';
import {Dialogs} from './components/messages/Dialogs';
// import {RootStateType} from './redux/state';
import {RootStateType, StoreType} from './redux/store';

type AppPropsType = {
    state: RootStateType;
    // addPost: (postText: string | undefined) => void;
    addPost: (postText: string) => void;
    postText: string;
    updatePostHandler: (newPostText: string) => void;
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Route exact={true} path={'/profile'} render={() => <Profile profile={props.state.profile}
                                                                         addPost={props.addPost}
                                                                         postText={props.postText}
                                                                         updatePostHandler={props.updatePostHandler}
            />}/>
            <Route exact={true} path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogs}/>}/>
            <Footer/>
        </div>
    );
};
