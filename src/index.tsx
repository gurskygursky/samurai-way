import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {addPost, RootStateType, state, updatePostHandler} from './redux/state';

// ReactDOM.render(
//     <BrowserRouter>
//         <App state={state} addPost={addPost}/>
//     </BrowserRouter>,
//     document.getElementById('root')
// );
export const rerenderEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} postText={state.profile.postText}
                 updatePostHandler={updatePostHandler}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireThree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
