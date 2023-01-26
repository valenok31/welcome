import * as axios from "axios";
import React from "react";

export const fetchWeather  = {

    fromCurrent() {
        const instanceRecreation = axios.create({
            baseURL: `https://api.weatherapi.com/v1/`,
        })
        //return instanceRecreation.get(`current.json?key=4e29dfe6fb834ea29ab152532232301&q=Novoaltaysk`)
        return instanceRecreation.get(`forecast.json?key=4e29dfe6fb834ea29ab152532232301&q=53.4,83.96`) //Novoaltaysk
        //return instanceRecreation.get(`forecast.json?key=4e29dfe6fb834ea29ab152532232301&q=51.90,143.16`) //Nogliki
        //return instanceRecreation.get(`forecast.json?key=4e29dfe6fb834ea29ab152532232301&q=62.00,129.70`) //Yakutsk
        //return instanceRecreation.get(`forecast.json?key=4e29dfe6fb834ea29ab152532232301&q=Evindarholar`) //Iceland
            .then(response => {
                //console.log(response.data)
                return response.data;
            })
            .catch((err) => {
                console.log('no data')
            })
    },
}