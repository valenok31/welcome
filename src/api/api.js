import * as axios from "axios";
import React from "react";
import {setUpdateCrutch} from "../redux/recreation_reducer";

export const fetchEvents = {

    fromTicketmaster(size = 5) {
        setUpdateCrutch(1);
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
        setUpdateCrutch(2);
        const instanceRecreation = axios.create({
            //withCredentials: true,
            baseURL: "https://ridb.recreation.gov/api/v1/recareas?limit=4&offset=3&apikey=53351234-6c6c-4392-a4b8-d38d53df1462",
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
        setUpdateCrutch(3);
        const instanceRecreation = axios.create({
            //withCredentials: true,
            baseURL: `https://ridb.recreation.gov/api/v1/recareas/${RecAreaID}/media?apikey=53351234-6c6c-4392-a4b8-d38d53df1462`,
        })
        return instanceRecreation.get()
            .then(response => {

                //return response.data.RECDATA[0];
                return {EntityID:RecAreaID, URL:response.data.RECDATA[0].URL}

            })
            .catch((err) => {
                console.log(err)
                return {EntityID:RecAreaID, URL:'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg'}
            })
    },
}