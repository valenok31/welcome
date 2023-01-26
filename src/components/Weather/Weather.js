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

            let currentLocation = this.props.getCurrentWeather.location
            let currentHours = currentLocation.localtime

            currentHours = +currentHours.slice(-5,-3)
            console.log(currentHours)
            let forecast = this.props.getCurrentWeather.forecast.forecastday[0].hour
            let windDegree=this.props.getCurrentWeather.current.wind_degree+90;
            //let windDegree=0+90;
            let windKph=6000/this.props.getCurrentWeather.current.wind_kph;
            let divStyle = (x)=>{
                return {
                    transform: `rotate(${windDegree+x}deg)`,
                    animationDuration: `${windKph}s`,
                    width: `${2000+x*10}%`,
                    height: `${2000+x*10}%`
                }
            }




            return (
                <div className={s.header}>
                    <div className={s.windDirection} key='1' style={divStyle(-3)}></div>
                    <div className={s.windDirection} key='2' style={divStyle(0)}></div>
                    <div className={s.windDirection} key='3' style={divStyle(3)}></div>
                    <div className={s.container}>
                        <div className={s.header__top}>
                            {currentLocation.name} / {currentLocation.region}, {currentLocation.country}
                        </div>
                        <div className={s.header__content}>
                            <div className={s.content__temp_hour_ahead} title={currentHours===0 ? 23 : currentHours}>
                                {/*{forecast[currentHours===0 ? 23 : currentHours].temp_c}*/}
                            </div>
                            <div className={s.content__temp_current} title={currentHours}>
                                {this.props.getCurrentWeather.current.temp_c}
                            </div>
                            <div className={s.content__temp_hour_ahead} title={currentHours>22 ? 0 : currentHours+1}>
                               {/* {forecast[currentHours===23 ? 0 : currentHours+1].temp_c}*/}
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