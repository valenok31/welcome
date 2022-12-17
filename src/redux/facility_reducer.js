import {fetchEvents} from "../api/api_facility";
import {setNormalizerRecArea} from "./recreation_reducer";

const SET_ARRAY_NAME_FACILITY = 'SET_ARRAY_NAME_FACILITY';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

const initialState = {
    arrayNameFacility: [],
    getArrayNameFacility() {
        return this.arrayNameFacility;
    },
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

export const setArrayNameFacility = (arrayNameFacility) => ({
    type: SET_ARRAY_NAME_FACILITY, arrayNameFacility
});

export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});


export const handleFetchFacility = (limit, offset) => {
    //debugger;
    return (dispatch) => {
        dispatch(toggleIsLoading(true));
        fetchEvents.fromFacility(limit, offset).then(data => {
            console.log(data.RECDATA)
            dispatch(toggleIsLoading(false));
            dispatch(setArrayNameFacility(data.RECDATA));
            dispatch(setTotalCount(data.METADATA.RESULTS.TOTAL_COUNT));
        });
    }
}

export default facility_reducer;