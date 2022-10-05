import {combineReducers, legacy_createStore as createStore} from "redux";
import surveyTree from './survey-tree';
import dataFromTicketmaster from './data-from-ticketmaster';
import siteManagement_reducer from "./siteManagement_reducer";


let reducers = combineReducers({
    surveyTree: surveyTree,
    dataFromTicketmaster: dataFromTicketmaster,
    siteManagement_reducer:siteManagement_reducer,
})

let store = createStore(reducers);

export default store;