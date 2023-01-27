import React from "react";
import s from './Weather.module.css'
import {handleCurrentWeather, setSettings} from "../../redux/weather_reducer";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";
import LocationSearch from "./LocationSearch/LocationSearch";

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
        /*console.log(!!this.props.getCurrentWeather.current)*/
        if (!!this.props.getCurrentWeather.current) {

            let currentLocation = this.props.getCurrentWeather.location
            let currentHours = currentLocation.localtime

            currentHours = +currentHours.slice(-5, -3)
            console.log(this.props.getCurrentWeather.current.wind_kph/3.6)
            let forecast = this.props.getCurrentWeather.forecast.forecastday[0].hour
            let windDegree = this.props.getCurrentWeather.current.wind_degree + 90;
            //let windDegree=0+90;
            let windKph = 6000 / this.props.getCurrentWeather.current.wind_kph;
            let divStyle = (x) => {
                return {
                    transform: `rotate(${windDegree + x}deg)`,
                    animationDuration: `${windKph}s`,
                    width: `${2000 + x * 10}%`,
                    height: `${2000 + x * 10}%`
                }
            }


            let headerStyle = (x) => {
                let opticBackgr = 0.5;
                let tempFunc = () => {
                    let temp = this.props.getCurrentWeather.current.temp_c;
                    if (temp > 43) return `rgba(220, 50, 50, ${opticBackgr})`;
                    if (temp > 26) return `rgba(220, ${480 - temp * 10}, 50, ${opticBackgr})`;
                    if (temp > 9) return `rgba(${-40 + temp * 10}, 220, 50, ${opticBackgr})`;
                    if (temp > -8) return `rgba(50, 220, ${140 - temp * 10}, ${opticBackgr})`;
                    if (temp > -25) return `rgba(50, ${300 + temp * 10}, 220, ${opticBackgr})`;
                    if (temp > -42) return `rgba(${-200 - temp * 10}, 50, 220, ${opticBackgr})`;
                    if (temp <= -42) return `rgba(220, 50, 220, ${opticBackgr})`;
                }
                /*console.log(tempFunc())*/
                return {
                    //backgroundColor: `#${x.toString(16)}${x.toString(16)}${x.toString(16)}`,
                    backgroundColor: tempFunc(),
                }
            }

            let w = <div><div className={s.windDirection} key='1' style={divStyle(-3)}></div>
            <div className={s.windDirection} key='2' style={divStyle(0)}></div>
            <div className={s.windDirection} key='3' style={divStyle(3)}></div></div>

            return (
                <div className={s.header} style={headerStyle()}>
                    {this.props.getCurrentWeather.current.wind_kph<5 ? <div></div> : w}
                    <div className={s.container}>
                        <div className={s.header__top}>
                            {currentLocation.name} / {currentLocation.region}, {currentLocation.country}
                            <div>
                                <LocationSearch setSettings={this.props.setSettings}
                                                getSettings={this.props.getSettings}/>
                            </div>
                        </div>
                        <div className={s.header__content}>
                            <div className={s.content__temp_hour_ahead} title={currentHours === 0 ? 23 : currentHours}>
                                {/*{forecast[currentHours===0 ? 23 : currentHours].temp_c}*/}
                            </div>
                            <div className={s.content__temp_current} title={currentHours}>
                                {this.props.getCurrentWeather.current.temp_c > 0 ? '+' : ''}{this.props.getCurrentWeather.current.temp_c}°
                            </div>
                            <div className={s.content__temp_hour_ahead}
                                 title={currentHours > 22 ? 0 : currentHours + 1}>
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
        getSettings: state.weather_reducer.settings,
        getIsLoading: state.weather_reducer.isLoading,
    })
};

let resultConnecting = connect(mapStateToProps, {handleCurrentWeather, setSettings})(Weather);

export default resultConnecting;