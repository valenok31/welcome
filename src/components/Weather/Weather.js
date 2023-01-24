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
            return (
                <div className={s.borderBox}>
                    {this.props.getCurrentWeather.current.temp_c}
                </div>
            )
        } else{
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