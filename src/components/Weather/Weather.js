import React from "react";
import s from './Weather.module.css'
import {handleCurrentWeather} from "../../redux/weather_reducer";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";

class Weather extends React.Component {

    componentDidMount() {
        this.props.handleCurrentWeather();
    }

    render() {
        console.log(!!this.props.getCurrentWeather.current)
        if (!!this.props.getCurrentWeather.current) {
            let currentHours = this.props.getCurrentWeather.location.localtime
            currentHours = +currentHours.slice(11, 13)

            console.log(currentHours)
            return (
                <div className={s.header}>
                    <div className={s.container}>
                        <div className={s.header__top}>
                            {this.props.getCurrentWeather.location.name} / {this.props.getCurrentWeather.location.region}, {this.props.getCurrentWeather.location.country}
                        </div>
                        <div className={s.header__content}>
                            <div className={s.content__temp_hour_ahead} title={currentHours===0 ? 23 : currentHours-1}>
                                {this.props.getCurrentWeather.forecast.forecastday[0].hour[currentHours===0 ? 23 : currentHours-1].temp_c}
                            </div>
                            <div className={s.content__temp_current} title={currentHours}>
                                {this.props.getCurrentWeather.current.temp_c}
                            </div>
                            <div className={s.content__temp_hour_ahead} title={currentHours>22 ? 0 : currentHours+1}>
                                {this.props.getCurrentWeather.forecast.forecastday[0].hour[currentHours===23 ? 0 : currentHours+1].temp_c}
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
        getIsLoading: state.weather_reducer.isLoading,
    })
};

let resultConnecting = connect(mapStateToProps, {handleCurrentWeather})(Weather);

export default resultConnecting;