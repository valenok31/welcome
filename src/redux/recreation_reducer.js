import {fetchEvents} from "../api/api";

const SET_EVENTS_RECREATION = 'SET_EVENTS_RECREATION';

const initialState = {
    eventsRecreation: [],
};

const recreation_reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_EVENTS_RECREATION:
            return {
                ...state,
                eventsRecreation: action.eventsRecreation,
            }

        default:
            return state;
    }
};

export const setEventsRecreation = (eventsRecreation) => ({
    type: SET_EVENTS_RECREATION, eventsRecreation
});

export const handleFetchEvents = (pet) => {
    return (dispatch) => {
        fetchEvents.fromRecreation().then(data => {
            dispatch(setEventsRecreation(data));
        });
    }
}

export default recreation_reducer;