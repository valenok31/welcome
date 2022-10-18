import * as axios from "axios";
import React from "react";


export const eventsAPI = {
    getStatus(size = 5) {
        const instanceT = axios.create({
            //withCredentials: true,
            baseURL: "https://app.ticketmaster.com/discovery/v2/",
        })
        return instanceT.get(`events.json?size=${size}&countryCode=US&apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV`)
            .then(response => {
                return response.data._embedded.events;
            })
            .catch((err) => {
                console.log(err.messages)
            })
    },
    getAppRecreation() {
        const instanceR = axios.create({
            //withCredentials: true,
            baseURL: "https://ridb.recreation.gov/api/v1/recareas?limit=5&apikey=53351234-6c6c-4392-a4b8-d38d53df1462",
        })
        return instanceR.get()
            .then(response => {
                return response.data.RECDATA;
            })
            .catch((err) => {
                console.log(err.messages)
            })
    },


}