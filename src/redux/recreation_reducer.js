import { fetchEvents } from "../api/api";

const SET_EVENTS_RECREATION = 'SET_EVENTS_RECREATION';
const SET_EVENTS_IMAGES_URL = 'SET_EVENTS_IMAGES_URL';
const SET_EVENTS_RECREATION_IMAGES = 'SET_EVENTS_RECREATION_IMAGES';
const DELET_EVENTS_RECREATION_IMAGES = 'DELET_EVENTS_RECREATION_IMAGES';
const UPDATE_CRUTCH = 'UPDATE_CRUTCH';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_LIMIT_PAGE = 'SET_LIMIT_PAGE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
    eventsRecreation: [],
    eventsRecreationImages3: [
        /* {id: '101363239', url: "https://sportcubes.ru/images/nofoto.jpg"},
         {id: '1013', url: "https://sportcubes.ru/images/nofoto.jpg"},*/
    ],
    eventsRecreationImages: [],
    updateCrutch: '0',
    getEventsRecreationImages() {
        return this.eventsRecreationImages;
    },
    totalCount: 0,
    limitPage: 10,
    currentPage: 10,

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
                currentPage: action.currentPage
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
        case DELET_EVENTS_RECREATION_IMAGES:
            debugger;
            return {
                ...state,
                eventsRecreationImages: [],

            }


        case UPDATE_CRUTCH:
            return {
                ...state,
                updateCrutch: action.rr
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

export const deleteEventsRecreationImages = () => ({
    type: DELET_EVENTS_RECREATION_IMAGES
});

export const setEventsImagesURL = (recAreaID, eventsImagesURL) => ({
    type: SET_EVENTS_IMAGES_URL, recAreaID, eventsImagesURL
});

export const setUpdateCrutch = (rr) => ({
    type: UPDATE_CRUTCH, rr
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

export const handleFetchEventsImages = (RecAreaID) => {

    return (dispatch) => {
        fetchEvents.fromRecreationImages(RecAreaID).then(data => {
            //console.log(data);
            dispatch(setEventsRecreationImages(data));
            //dispatch(setUpdateCrutch(3));
        });
    }
}

export const handleFetchArr = (arrImg) => {
    return (dispatch) => {
        arrImg.map((RecAreaID) => {
            // debugger;
            fetchEvents.fromArrImages(RecAreaID).then(data => {
                //console.log(data);
                dispatch(setEventsRecreationImages(data));
                //dispatch(setUpdateCrutch(3));
            });


        })
    }
}


export default recreation_reducer;