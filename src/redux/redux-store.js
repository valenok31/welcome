import {combineReducers, legacy_createStore as createStore} from "redux";
import surveyTree from './survey-tree';


let reducers = combineReducers({
    surveyTree: surveyTree,
})

let store = createStore(reducers);

export default store;