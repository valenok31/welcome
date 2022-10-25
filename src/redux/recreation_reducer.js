import {fetchEvents} from "../api/api";

const SET_EVENTS_RECREATION = 'SET_EVENTS_RECREATION';
const SET_EVENTS_RECREATION_IMAGES = 'SET_EVENTS_RECREATION_IMAGES';
const UPDATE_CRUTCH = 'UPDATE_CRUTCH';

const initialState = {
    eventsRecreation: [],
    eventsRecreationImages: [
        {id: '101363239', url: "https://sportcubes.ru/images/nofoto.jpg"},
        {id: '1013', url: "https://sportcubes.ru/images/nofoto.jpg"},
    ],
    updateCrutch: [],
    getEventsRecreationImages(){
       return this.eventsRecreationImages;
    },

};

const recreation_reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_EVENTS_RECREATION:
            return {
                ...state,
                eventsRecreation: action.eventsRecreation,
            }
        case SET_EVENTS_RECREATION_IMAGES:
            return {
                ...state,
                eventsRecreationImages: [...state.eventsRecreationImages, {
                    id: action.eventsRecreationImages.EntityID,
                    url: action.eventsRecreationImages.URL
                }],


            }

        case UPDATE_CRUTCH:
            return {
                ...state,
                updateCrutch: [...state.updateCrutch, action.updateCrutch]
            }

        default:
            return state;
    }
};

export const setEventsRecreation = (eventsRecreation) => ({
    type: SET_EVENTS_RECREATION, eventsRecreation
});

export const setEventsRecreationImages = (eventsRecreationImages) => ({
    type: SET_EVENTS_RECREATION_IMAGES, eventsRecreationImages
});

export const updateCrutch = (updateCrutch) => ({
    type: UPDATE_CRUTCH, updateCrutch
});


export const handleFetchEvents = (pet) => {
    return (dispatch) => {
        fetchEvents.fromRecreation().then(data => {
            dispatch(setEventsRecreation(data));
        });
    }
}

export const handleFetchEventsImages = (RecAreaID) => {

    return (dispatch) => {
        fetchEvents.fromRecreationImages(RecAreaID).then(data => {
            //console.log(data);
            dispatch(setEventsRecreationImages(data));
        });
    }
}

export default recreation_reducer;