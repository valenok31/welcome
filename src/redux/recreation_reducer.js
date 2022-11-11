import {fetchEvents} from "../api/api";

const SET_EVENTS_RECREATION = 'SET_EVENTS_RECREATION';
const SET_EVENTS_IMAGES_URL = 'SET_EVENTS_IMAGES_URL';
const SET_EVENTS_RECREATION_IMAGES = 'SET_EVENTS_RECREATION_IMAGES';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
    eventsRecreation: [],
    eventsRecreationImages: [],
    getEventsRecreationImages() {
        return this.eventsRecreationImages;
    },
    totalCount: 0,
    limitPage: 10,
    currentPage: 1,
};

const recreation_reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_EVENTS_RECREATION:
            return {
                ...state,
                eventsRecreation: action.eventsRecreation
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
                eventsRecreation: [],
                eventsRecreationImages: []
            }

        case SET_EVENTS_IMAGES_URL:
            state.eventsRecreation[action.recAreaID].url = action.eventsImagesURL
            return {
                ...state,
                eventsRecreation: state.eventsRecreation
            }

        case SET_EVENTS_RECREATION_IMAGES:
            return {
                ...state,
                eventsRecreationImages: [...state.eventsRecreationImages, action.data],
            }

        default:
            return state;
    }
};

export const setEventsRecreation = (eventsRecreation) => ({
    type: SET_EVENTS_RECREATION, eventsRecreation
});

export const setEventsRecreationImages = (data) => ({
    type: SET_EVENTS_RECREATION_IMAGES, data
});

export const setEventsImagesURL = (recAreaID, eventsImagesURL) => ({
    type: SET_EVENTS_IMAGES_URL, recAreaID, eventsImagesURL
});

export const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT, totalCount
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage
});



export const handleFetchEvents = (limit, offset) => {
    return (dispatch) => {
        fetchEvents.fromRecreation(limit, offset).then(data => {
            dispatch(setEventsRecreation([]));
            dispatch(setEventsRecreation(data.RECDATA));
            dispatch(setTotalCount(data.METADATA.RESULTS.TOTAL_COUNT));
        });
    }
}

export const handleFetchArr = (arrImg) => {
    return (dispatch) => {
        arrImg.map((RecAreaID) => {
            fetchEvents.fromArrImages(RecAreaID).then(data => {
                dispatch(setEventsRecreationImages(data));
            });
        })
    }
}


export default recreation_reducer;