import React from "react";
import s from './Weather.module.css'
import {handleCurrentWeather, setSettings} from "../../redux/weather_reducer";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";
import LocationSearch from "./LocationSearch/LocationSearch";
import {temperatureGradient} from "./accessoryFunctions/temperatureGradient";
import {windVisualization} from "./accessoryFunctions/windVisualization";

class Weather extends React.Component {

    componentDidMount() {
        this.props.handleCurrentWeather(this.props.getSettings);
    }

    componentDidUpdate(prevProps) {
        if (this.props.getSettings !== prevProps.getSettings) {
            this.props.handleCurrentWeather(this.props.getSettings);
        }
    }

    render() {

        if (!!this.props.getCurrentWeather.current) {
            let getWeather = this.props.getCurrentWeather

            let currentLocation = getWeather.location
            let currentWeather = getWeather.current
            let temp = currentWeather.temp_c;
            let forecastTomorrow = getWeather.forecast.forecastday[1]
            let forecastDayAfterTomorrow = getWeather.forecast.forecastday[2]
            let windDegree = currentWeather.wind_degree;
            let windKph = currentWeather.wind_kph;

            return (
                <div className={s.header} style={temperatureGradient(temp)}>
                    {/*{windKph < 5 ? <div> </div> : windVisualization(windDegree, windKph)}*/}
                    {windVisualization(windDegree, windKph)}
                    <div className={s.container}>
                        <div className={s.header__top}>
                            {currentLocation.name} / {currentLocation.region}, {currentLocation.country}
                            <div>
                                <LocationSearch setSettings={this.props.setSettings}
                                                getSettings={this.props.getSettings}/>
                            </div>
                        </div>
                        <div className={s.header__content}>

                            <div className={s.content__temp_current}>
                                {temp > 0 ? '+' : ''}{temp}°
                            </div>
                            <div className={s.content__temp_hour_ahead}>
                                {forecastTomorrow.day.avgtemp_c > 0 ? '+' : ''}{forecastTomorrow.day.avgtemp_c}°
                            </div>
                            <div className={s.content__temp_hour_ahead}>
                                {forecastDayAfterTomorrow.day.avgtemp_c > 0 ? '+' : ''}{forecastDayAfterTomorrow.day.avgtemp_c}°
                            </div>
                        </div>
                    </div>

                </div>
            )
        } else {
            return <Preloader/>
        }
    }
}

let mapStateToProps = (state) => {
    return ({
        getCurrentWeather: state.weather_reducer.currentWeather,
        getSettings: state.weather_reducer.settings,
        getIsLoading: state.weather_reducer.isLoading,
    })
};

let resultConnecting = connect(mapStateToProps, {handleCurrentWeather, setSettings})(Weather);

export default resultConnecting;