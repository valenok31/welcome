import {fetchEvents} from "../api/api";

const SET_EVENTS_TICKETMASTER = 'SET_EVENTS_TICKETMASTER';

const initialState = {
    eventsTicketmaster: [],
};

const ticketmaster_reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_EVENTS_TICKETMASTER:
            return {
                ...state,
                eventsTicketmaster: action.eventsTicketmaster,
            }

        default:
            return state;
    }
};

export const setEventsTicketmaster = (eventsTicketmaster) => ({
    type: SET_EVENTS_TICKETMASTER, eventsTicketmaster
});

export const handleFetchEvents = (size) => {
    return (dispatch) => {
        fetchEvents.fromTicketmaster(size).then(data => {
            dispatch(setEventsTicketmaster(data));
        });
    }
}

export default ticketmaster_reducer;