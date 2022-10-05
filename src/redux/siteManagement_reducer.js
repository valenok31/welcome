const SET_LIST_ATTRACTIONS = 'SET_LIST_ATTRACTIONS';


const initialState = {
    listAttractions: [],
};


const siteManagement_reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_LIST_ATTRACTIONS:
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

export default siteManagement_reducer;