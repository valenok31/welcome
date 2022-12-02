import {fetchEvents} from "../api/api";
import MediaURL from "../components/Recreation/MediaURL";

const SET_EVENTS_RECREATION = 'SET_EVENTS_RECREATION';
const SET_EVENTS_IMAGES_URL = 'SET_EVENTS_IMAGES_URL';
const SET_EVENTS_RECREATION_IMAGES = 'SET_EVENTS_RECREATION_IMAGES';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const SET_NORMALIZER_RECAREA = 'SET_NORMALIZER_RECAREA';
const SET_RECREATION_DATA = 'SET_RECREATION_DATA';
const SET_URL = 'SET_URL';

const initialState = {
    eventsRecreation: [],
    _eventsRecreationImages: [],
    getEventsRecreationImages() {
        return this._eventsRecreationImages;
    },
    totalCount: 0,
    limitPage: 5,
    currentPage: 0,
    isLoading: false,
    normalizerRecArea: [],
    recreationData: {},
    url:{},
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
                _eventsRecreationImages: []
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
                _eventsRecreationImages: [...state._eventsRecreationImages, action.data],
            }

        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }

        case SET_NORMALIZER_RECAREA:
            return {
                ...state,
                normalizerRecArea: [...state.normalizerRecArea, action.normalizerRecArea],
            }

        case SET_RECREATION_DATA:

            return {
                ...state,
                recreationData: action.recreationData,
            }
        case SET_URL:
            return {
                ...state,
                url: action.url,
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

export const setNormalizerRecArea = (normalizerRecArea) => ({
    type: SET_NORMALIZER_RECAREA, normalizerRecArea
});

export const setRecreationData = (recreationData) => ({
    type: SET_RECREATION_DATA, recreationData
});
export const setURL = (url) => ({
    type: SET_URL, url
});

export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});


export const handleFetchEvents = (limit, offset) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true));
        fetchEvents.fromRecreation(limit, offset).then(data => {
            dispatch(toggleIsLoading(false));
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

export const handleFetchRecArea = (RecAreaID) => {
    //debugger;
    return (dispatch) => {
        //dispatch(toggleIsLoading(true));
        fetchEvents.fromRecreationRecArea(RecAreaID).then(data => {
            // dispatch(toggleIsLoading(false));
            dispatch(setNormalizerRecArea(data));
        });
    }
}

/*export const handleFetchAreas = (RecAreaID) => {
    //debugger;
    return (dispatch) => {
        //dispatch(toggleIsLoading(true));
        fetchEvents.fromRecreationAreas(RecAreaID).then(data => {
            // dispatch(toggleIsLoading(false));
            dispatch(setRecreationData(data));
        });
    }
}*/
export const handleFetchAreas = (RecAreaID) => {
    //debugger;
    return (dispatch) => {
       MediaURL(RecAreaID);
        fetchEvents.fromArrImages(RecAreaID).then(data => {
            // dispatch(toggleIsLoading(false));
            dispatch(setRecreationData(data));
            dispatch(setURL(data));
        });
        fetchEvents.fromRecreationAreas(RecAreaID).then(data => {
            // dispatch(toggleIsLoading(false));
            dispatch(setRecreationData(data));
        });
    }
}

export default recreation_reducer;