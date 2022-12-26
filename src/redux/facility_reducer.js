import {fetchEvents} from "../api/api_facility";

const SET_ARRAY_NAME_FACILITY = 'SET_ARRAY_NAME_FACILITY';
const SET_ARRAY_MEDIA_FACILITY = 'SET_ARRAY_MEDIA_FACILITY';
const SET_CURRENT_FACILITY = 'SET_CURRENT_FACILITY';
const SET_CURRENT_FACILITY_ADDRESS = 'SET_CURRENT_FACILITY_ADDRESS';

const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

const initialState = {
    arrayNameFacility: [],
    getArrayNameFacility() {
        return this.arrayNameFacility;
    },
    arrayMediaFacility: [],
    currentFacility: {},
    currentFacilityAddress: {},
    totalCount: 0,
    limitPage: 5,
    currentPage: 0,
    isLoading: false,
};

const facility_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARRAY_NAME_FACILITY:
            return {
                ...state,
                arrayNameFacility: action.arrayNameFacility,
            }

        case SET_ARRAY_MEDIA_FACILITY:
            return {
                ...state,
                arrayMediaFacility: [...state.arrayMediaFacility, action.arrayMediaFacility],
            }


        case SET_CURRENT_FACILITY:
            return {
                ...state,
                currentFacility: action.currentFacility,
            }

        case SET_CURRENT_FACILITY_ADDRESS:
            return {
                ...state,
                currentFacilityAddress: action.currentFacilityAddress,
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
            }

        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }

        default:
            return state;
    }
};

export const setArrayNameFacility = (arrayNameFacility) => ({type: SET_ARRAY_NAME_FACILITY, arrayNameFacility});
export const setArrayMediaFacility = (arrayMediaFacility) => ({type: SET_ARRAY_MEDIA_FACILITY, arrayMediaFacility});
export const setCurrentFacility = (currentFacility) => ({type: SET_CURRENT_FACILITY, currentFacility});
export const setCurrentFacilityAddress = (currentFacilityAddress) => ({type: SET_CURRENT_FACILITY_ADDRESS, currentFacilityAddress});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage2 = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});

export const setCurrentPage = (currentPage) => {
    return (dispatch) => {
        dispatch(setCurrentPage2(0));
        dispatch(setCurrentPage2(currentPage));

    }
}



export const handleFetchFacility = (limit, offset) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true));
        dispatch(setArrayNameFacility([]));
        fetchEvents.fromFacility(limit, offset).then(data => {
            dispatch(toggleIsLoading(false));
            dispatch(setArrayNameFacility(data.RECDATA));
            dispatch(setTotalCount(data.METADATA.RESULTS.TOTAL_COUNT));
        });
    }
}

export const handleFetchFacilityMedia = (facilityId = 5) => {
    return (dispatch) => {
        //dispatch(setArrayMediaFacility([]));
        fetchEvents.fromFacilityMedia(facilityId).then(data => {
            dispatch(setArrayMediaFacility(data));
        });
    }
}

export const handleFetchCurrentFacility = (facilityId = 5) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true));
        dispatch(setCurrentFacility({}));
        fetchEvents.fromFacilityId(facilityId).then(data => {
            dispatch(toggleIsLoading(false));
            dispatch(setCurrentFacility(data));
        });
    }
}
export const handleFetchCurrentFacilityAddress = (facilityId = 5) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true));
        dispatch(setCurrentFacilityAddress({}));
        fetchEvents.fromFacilityAddress(facilityId).then(data => {
            dispatch(toggleIsLoading(false));
            dispatch(setCurrentFacilityAddress(data));
        });
    }
}

export default facility_reducer;