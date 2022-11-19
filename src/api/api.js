import * as axios from "axios";
import React from "react";

export const fetchEvents = {

    fromTicketmaster(size = 5, page = 0) {
        const instanceTicketmaster = axios.create({
            baseURL: "https://app.ticketmaster.com/discovery/v2/",
        })
        return instanceTicketmaster.get(`events.json?size=${size}&page=${page}&countryCode=&keyword=taylor&classificationName=&apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV`)
            .then(response => {
                return response.data;
            })
            .catch((err) => {
                //console.log('hgakjshkwl')
                console.log(err.message)
            })
    },

    fromRecreation(limit = 10, offset = 0) {
        const instanceRecreation = axios.create({
            baseURL: `https://ridb.recreation.gov/api/v1/`,
        })
        return instanceRecreation.get(`recareas?limit=${limit}&offset=${offset}&apikey=53351234-6c6c-4392-a4b8-d38d53df1462`)
            .then(response => {
                return response.data;
            })
            .catch((err) => {
            })
    },

    fromArrImages(RecAreaID) {
        const instanceRecreation = axios.create({
            baseURL: `https://ridb.recreation.gov/api/v1/recareas/${RecAreaID}/media?apikey=53351234-6c6c-4392-a4b8-d38d53df1462`,
        })
        return instanceRecreation.get()
            .then((response) => {
                return {id: RecAreaID, url: response.data.RECDATA[0].URL}
            })
            .catch((err) => {
                return {id: RecAreaID, url: 'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg'}
            })
    },
}