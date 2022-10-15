import {eventsAPI} from "../api/api";

const SET_LIST_ATTRACTIONS = 'SET_LIST_ATTRACTIONS';
const SET_EVENT_API = 'SET_EVENT_API';
const STOP_AXIOS = 'STOP_AXIOS';


const initialState = {
    listAttractions: {},
    get getListAttractions() {
        return this.listAttractions;
    },
    stopAxios: false,
};


const siteManagement_reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_LIST_ATTRACTIONS:
            return {
                ...state,
                listAttractions: action.listAttractions,
            }

        case SET_EVENT_API:
            return {
                ...state,
                listAttractions: action.listAttractions,
            }

        case STOP_AXIOS:
            return {
                ...state,
                stopAxios: action.stopAxios,
            }

        default:
            return state;
    }
};

export const getUsersRed = (listAttractions) => ({
    type: SET_LIST_ATTRACTIONS, listAttractions
});

export const setEventAPI = (keywordSearch) => ({
    type: SET_EVENT_API, keywordSearch
});
export const stopAxios = (stopAxios) => ({
    type: STOP_AXIOS, stopAxios
});

export const setListAttractions = (pet) => {

    return (dispatch) => {
        //dispatch(getUsersRed(pet))
        eventsAPI.getStatus(siteManagement_reducer.stopAxios).then(data => {
            dispatch(getUsersRed(data));
        });


    }



}


export default siteManagement_reducer;