const SET_LIST_ATTRACTIONS = 'SET_LIST_ATTRACTIONS';
const SET_EVENT_API = 'SET_EVENT_API';


const initialState = {
    listAttractions: ['TicketmasterTest!!!'],
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

export const setListAttractions = (listAttractions) => ({
    type: SET_LIST_ATTRACTIONS, listAttractions
});

export const setEventAPI = (keywordSearch) => ({
    type: SET_EVENT_API, keywordSearch
});

export default siteManagement_reducer;