import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import surveyTree from './survey-tree';
import dataFromTicketmaster from './data-from-ticketmaster';
import siteManagement_reducer from "./siteManagement_reducer";
import thunkMiddleware from "redux-thunk"
import recreation_siteManagement_reducer from "./recreation_siteManagement_reducer";

let reducers = combineReducers({
    surveyTree: surveyTree,
    dataFromTicketmaster: dataFromTicketmaster,

    recreation_siteManagement_reducer:recreation_siteManagement_reducer,
    siteManagement_reducer:siteManagement_reducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;