import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import ticketmaster_reducer from "./ticketmaster_reducer";
import thunkMiddleware from "redux-thunk"
import recreation_reducer from "./recreation_reducer";

let reducers = combineReducers({
    recreation_reducer:recreation_reducer,
    ticketmaster_reducer:ticketmaster_reducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;