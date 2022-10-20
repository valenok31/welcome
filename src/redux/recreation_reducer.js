import {fetchEvents} from "../api/api";

const SET_LIST_ATTRACTIONSR = 'SET_LIST_ATTRACTIONSR';
const SET_EVENT_APIR = 'SET_EVENT_APIR';


const initialState = {
    listAttractionsR: [],
};


const recreation_reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_LIST_ATTRACTIONSR:
            return {
                ...state,
                listAttractionsR: action.listAttractionsR,
            }

        case SET_EVENT_APIR:
            return {
                ...state,
                listAttractionsR: action.listAttractionsR,
            }


        default:
            return state;
    }
};

export const getUsersRedR = (listAttractionsR) => ({
    type: SET_LIST_ATTRACTIONSR, listAttractionsR
});

export const setEventAPI = (keywordSearch) => ({
    type: SET_EVENT_APIR, keywordSearch
});


export const setListAttractionsR = (pet) => {
    return (dispatch) => {
        fetchEvents.getAppRecreation().then(data => {
            dispatch(getUsersRedR(data));
        });
    }
}

export default recreation_reducer;