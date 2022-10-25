import * as axios from "axios";
import React from "react";

export const fetchEvents = {
    fromTicketmaster(size = 5) {
        const instanceTicketmaster = axios.create({
            baseURL: "https://app.ticketmaster.com/discovery/v2/",
        })
        return instanceTicketmaster.get(`events.json?size=${size}&countryCode=US&apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV`)
            .then(response => {
                return response.data._embedded.events;
            })
            .catch((err) => {
                console.log(err.message)
            })
    },
    fromRecreation() {
        const instanceRecreation = axios.create({
            //withCredentials: true,
            baseURL: "https://ridb.recreation.gov/api/v1/recareas?limit=6&apikey=53351234-6c6c-4392-a4b8-d38d53df1462",
        })
        return instanceRecreation.get()
            .then(response => {
                return response.data.RECDATA;
            })
            .catch((err) => {
                console.log(err.messages)
            })
    },
    fromRecreationImages(RecAreaID) {
        const instanceRecreation = axios.create({
            //withCredentials: true,
            baseURL: `https://ridb.recreation.gov/api/v1/recareas/${RecAreaID}/media?apikey=53351234-6c6c-4392-a4b8-d38d53df1462`,
        })
        return instanceRecreation.get()
            .then(response => {

                return response.data.RECDATA[0];

            })
            .catch((err) => {
                //console.log(err)
                return {EntityID:RecAreaID, URL:'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg'}
            })
    },
}