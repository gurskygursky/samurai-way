import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {App, AppContainer} from './App';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>,
    </React.StrictMode>,
    document.getElementById('root')
);

// export const rerenderEntireThree = (state: RootStateType) => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <App state={state}
//                  dispatch={store.dispatch.bind(store)}
//                  postText={store._state.profile.postText}
//                  messageText={store._state.dialogs.messageText}
//             />
//         </BrowserRouter>,
//         document.getElementById('root')
//     );
// }
//
// rerenderEntireThree(store.getState());
// store.subscribe(() => {
//     rerenderEntireThree(store.getState())
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
