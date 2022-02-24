import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tw-elements';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "./store/store";
import {Provider as ReduxProvider} from "react-redux"


const store = setupStore()

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ReduxProvider store={store}>
                <App/>
            </ReduxProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

