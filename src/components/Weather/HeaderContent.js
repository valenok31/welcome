import React from "react";
import s from "./Weather.module.css";

export function HeaderContent(props) {

    let temp = props.currentWeather.temp_c;
    let arr = [];
    for (let i = 1; i < 5; i++) {
        arr.push(
            <div className={s.content__temp_forecast}>
                <div className={s.content__data_current}>{props.nextDay[i].date}</div>
                {props.nextDay[i].day.avgtemp_c > 0 ? '+' : ''}{props.nextDay[i].day.avgtemp_c}°
            </div>
        )
    }

    function getOnWheel() {
        console.log('scroll!')
    }

    return <div className={s.header__content} onWheel={() => getOnWheel()}>
        <div className={s.content__current_weather}>
            <div className={s.content__data_current}>
                {props.currentWeather.last_updated}
            </div>
            <div className={s.content__temp_current}>
                {temp > 0 ? '+' : ''}{temp}°
            </div>
            <div className={s.content__details_current}>
                <div className={s.details_current__parameter}>Pressure:</div>
                <div
                    className={s.details_current__value}>{Math.round(props.currentWeather.pressure_mb * 0.750064)} mmHg
                </div>
                <div className={s.details_current__parameter}>Humidity:</div>
                <div className={s.details_current__value}>{Math.round(props.currentWeather.humidity)}%</div>
                <div className={s.details_current__parameter}>Wind:</div>
                <div
                    className={s.details_current__value}>{Math.round(props.currentWeather.wind_mph * 10 / 3.6) / 10} m/s
                    ({props.currentWeather.wind_dir})
                </div>
            </div>

        </div>
        <div className={s.content__forecast_weather}>
            {arr}
        </div>
    </div>
}