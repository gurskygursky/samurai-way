import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile, ProfilePropsType} from './components/profile/Profile';
import {Footer} from './components/footer/Footer';
import {Route, RouteProps} from 'react-router-dom';
import {Dialogs} from './components/messages/Dialogs';
import {RootStateType} from './redux/state';
// import {MessageType, PostType, UserType} from './';

type AppPropsType = {
    state: RootStateType;
    // arrayPosts: Array<PostType>;
    // arrayUsers: Array<UserType>;
    // arrayMessages: Array<MessageType>;

}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            {/*<Route exact path={'/profile'} component={Profile}/>*/}
            {/*<Route exact render={() => <Profile arrayPosts={props.arrayPosts}/>}/>*/}
            {/*<Route exact path={'/dialogs'} component={Dialogs}/>*/}
            {/*<Route exact path={'/dialogs'} component={Dialogs}/>*/}
            {/*<Route exact path={'/dialogs'} render={() => <Dialogs arrayMessages={props.arrayMessages}*/}
            {/*                                                      arrayUsers={props.arrayUsers}/>}/>*/}
            <Route exact={true} path={'/profile'} render={() => <Profile profile={props.state.profile} />}/>
            <Route exact={true} path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogs} />}/>
            {/*<Profile/>*/}
            {/*<Messages/>*/}
            <Footer/>
        </div>
    );
}
