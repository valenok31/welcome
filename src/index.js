import React from 'react';
//import ReactDOM from 'react-dom';
//import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {eventsAPI} from "./api/api";
import {Provider} from "react-redux";


let rerenderEntireTree = (state) => {

/*    const container = document.getElementById('root');
    const root = createRoot(container);*/
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<BrowserRouter>
            <Provider store={store}>
                <App api={eventsAPI}/>
            </Provider>
        </BrowserRouter>);


/*    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App api={eventsAPI}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    )*/
}
rerenderEntireTree(store.getState());
store.subscribe(()=> {
    let state = store.getState();

    rerenderEntireTree(state)
});