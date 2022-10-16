import {eventsAPI} from "../api/api";

const SET_LIST_ATTRACTIONS = 'SET_LIST_ATTRACTIONS';
const SET_EVENT_API = 'SET_EVENT_API';


const initialState = {
    listAttractions: [],
    get getListAttractions() {
        return this.listAttractions;
    },
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


export const setListAttractions = (pet) => {
    return (dispatch) => {
        //dispatch(getUsersRed(pet))
        eventsAPI.getStatus().then(data => {
            dispatch(getUsersRed(data));
        });
    }
}

export const setListAttractionsR = (pet) => {
    return (dispatch) => {
        //dispatch(getUsersRed(pet))
        eventsAPI.getAppRecreation().then(data => {
            dispatch(getUsersRed(data));
        });
    }
}


export default siteManagement_reducer;