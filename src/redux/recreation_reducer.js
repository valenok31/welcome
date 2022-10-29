import { fetchEvents } from "../api/api";

const SET_EVENTS_RECREATION = 'SET_EVENTS_RECREATION';
const SET_EVENTS_RECREATION_IMG = 'SET_EVENTS_RECREATION_IMG';
const SET_EVENTS_RECREATION_IMAGES = 'SET_EVENTS_RECREATION_IMAGES';
const UPDATE_CRUTCH = 'UPDATE_CRUTCH';

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
};

const recreation_reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_EVENTS_RECREATION:
            return {
                ...state,
                eventsRecreation: [...state.eventsRecreation, action.eventsRecreation[0]]
            }

        case SET_EVENTS_RECREATION_IMG:
            return {
                ...state,
                eventsRecreation: action.eventsRecreation,

            }

        case SET_EVENTS_RECREATION_IMAGES:
            return {
                ...state,
                /*                eventsRecreationImages: [...state.eventsRecreationImages, {
                                    id: action.data.EntityID,
                                    url: action.data.URL
                                }],*/
                eventsRecreationImages: [...state.eventsRecreationImages, action.data],

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

export const setUpdateCrutch = (rr) => ({
    type: UPDATE_CRUTCH, rr
});


export const handleFetchEvents = (pet) => {
    return (dispatch) => {
        fetchEvents.fromRecreation().then(data => {
            dispatch(setEventsRecreation(data));
            //dispatch(setUpdateCrutch(2));
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