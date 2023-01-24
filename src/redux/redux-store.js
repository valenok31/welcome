import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import ticketmaster_reducer from "./ticketmaster_reducer";
import thunkMiddleware from "redux-thunk"
import recreation_reducer from "./recreation_reducer";
import facility_reducer from "./facility_reducer";
import weather_reducer from "./weather_reducer";

let reducers = combineReducers({
    recreation_reducer:recreation_reducer,
    ticketmaster_reducer:ticketmaster_reducer,
    facility_reducer:facility_reducer,
    weather_reducer:weather_reducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;