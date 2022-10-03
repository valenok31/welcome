import {combineReducers, legacy_createStore as createStore} from "redux";
import surveyTree from './survey-tree';
import dataFromTicketmaster from './data-from-ticketmaster';


let reducers = combineReducers({
    surveyTree: surveyTree,
    dataFromTicketmaster: dataFromTicketmaster,
})

let store = createStore(reducers);

export default store;