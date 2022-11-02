import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile, ProfilePropsType} from './components/profile/Profile';
import {Footer} from './components/footer/Footer';
import {Route, RouteProps} from 'react-router-dom';
import {Dialogs} from './components/messages/Dialogs';
import {MessageType, PostType, UserType} from './';

type AppPropsType = {
    arrayPosts: Array<PostType>;
    arrayUsers: Array<UserType>;
    arrayMessages: Array<MessageType>;

}

export const App = (props: AppPropsType) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            {/*<Route exact path={'/profile'} component={Profile}/>*/}
            <Route exact render={() => <Profile arrayPosts={props.arrayPosts}/>}/>
            {/*<Route exact path={'/dialogs'} component={Dialogs}/>*/}
            {/*<Route exact path={'/dialogs'} component={Dialogs}/>*/}
            <Route exact path={'/dialogs'} render={() => <Dialogs arrayMessages={props.arrayMessages}
                                                                  arrayUsers={props.arrayUsers}/>}/>
            {/*<Profile/>*/}
            {/*<Messages/>*/}
            <Footer/>
        </div>
    );
}
