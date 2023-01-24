import {fetchWeather} from "../api/api_weather";

const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

const initialState = {
    currentWeather: {},
    getCurrentWeather() {
        return this.currentWeather;
    },
    isLoading: false,
};

const weather_reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.currentWeather
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


export const setCurrentWeather = (currentWeather) => ({type: SET_CURRENT_WEATHER, currentWeather});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});

export const handleCurrentWeather = () => {
    return (dispatch) => {
        dispatch(setCurrentWeather({}));
        fetchWeather.fromCurrent().then(data => {
            dispatch(setCurrentWeather(data));
        });
    }
}

export default weather_reducer;