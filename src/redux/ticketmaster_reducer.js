import {fetchEvents} from "../api/api";

const SET_EVENTS_TICKETMASTER = 'SET_EVENTS_TICKETMASTER';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

const initialState = {
    eventsTicketmaster: [],
    totalCount: 0,
    limitPage: 5,
    currentPage: 0,
    isLoading: false,
};

const ticketmaster_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EVENTS_TICKETMASTER:
            return {
                ...state,
                eventsTicketmaster: action.eventsTicketmaster,
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }

        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }


        default:
            return state;
    }
};

export const setEventsTicketmaster = (eventsTicketmaster) => ({type: SET_EVENTS_TICKETMASTER, eventsTicketmaster});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const handleFetchEvents = (size, page) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true));
        fetchEvents.fromTicketmaster(size, page).then(data => {
            dispatch(toggleIsLoading(false));
            dispatch(setEventsTicketmaster([]));
            dispatch(setEventsTicketmaster(data._embedded.events));
            dispatch(setTotalCount(data.page.totalElements));

        });
    }
}

export default ticketmaster_reducer;