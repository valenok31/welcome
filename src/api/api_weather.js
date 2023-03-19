import * as axios from "axios";
import React from "react";

export const fetchWeather  = {

    fromCurrent(settings) {
        const instanceRecreation = axios.create({
            baseURL: `https://api.weatherapi.com/v1/`,
        })
        //return instanceRecreation.get(`current.json?key=4e29dfe6fb834ea29ab152532232301&q=${settings.location}`)
        return instanceRecreation.get(`forecast.json?key=4e29dfe6fb834ea29ab152532232301&q=${settings.location}&days=5`) //Novoaltaysk
       // return instanceRecreation.get(`forecast.json?key=4e29dfe6fb834ea29ab152532232301&q=51.90,143.16`) //Nogliki
        //return instanceRecreation.get(`forecast.json?key=4e29dfe6fb834ea29ab152532232301&q=Tokyo&days=5`) //Yakutsk
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