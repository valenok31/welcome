import * as axios from "axios";
import React from "react";

export const fetchWeather  = {

    fromCurrent(limit = 5, offset = 0) {
        const instanceRecreation = axios.create({
            baseURL: `https://api.weatherapi.com/v1/`,
        })
        return instanceRecreation.get(`current.json?key=4e29dfe6fb834ea29ab152532232301&q=Moscow`)
            .then(response => {
                console.log(response.data)
                return response.data;
            })
            .catch((err) => {
                console.log('no data')
            })
    },
}