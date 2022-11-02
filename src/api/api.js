import * as axios from "axios";
import React from "react";
import { setUpdateCrutch } from "../redux/recreation_reducer";

export const fetchEvents = {

    fromTicketmaster(size = 5) {
        //setUpdateCrutch(1);
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

    fromRecreation(limit=6) {
        const instanceRecreation = axios.create({
            baseURL: `https://ridb.recreation.gov/api/v1/`,
        })
        return instanceRecreation.get(`recareas?limit=${limit}&offset=0&apikey=53351234-6c6c-4392-a4b8-d38d53df1462`)
            .then(response => {
                return response.data.RECDATA;
            })
            .catch((err) => {
            })
    },
    /* fromRecreationImages(RecAreaID) {
         //setUpdateCrutch(3);
         
         const instanceRecreation = axios.create({
             baseURL: `https://ridb.recreation.gov/api/v1/recareas/${RecAreaID}/media?apikey=53351234-6c6c-4392-a4b8-d38d53df1462`,
         })
         return instanceRecreation.get()
             .then((response) => {
                 //return {EntityID:RecAreaID, URL:response.data.RECDATA[0].URL}
                 return {id: RecAreaID, url: response.data.RECDATA[0].URL}
 
             })
             .catch((err) => {
                 //return {EntityID:RecAreaID, URL:'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg'}
                 return {id: RecAreaID, url: 'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg'}
             })
     },*/




    fromArrImages(RecAreaID) {
        //setUpdateCrutch(3);
        //console.log('===');
        const instanceRecreation = axios.create({
            baseURL: `https://ridb.recreation.gov/api/v1/recareas/${RecAreaID}/media?apikey=53351234-6c6c-4392-a4b8-d38d53df1462`,
        })
        return instanceRecreation.get()
            .then((response) => {
                //return {EntityID:RecAreaID, URL:response.data.RECDATA[0].URL}
                return { id: RecAreaID, url: response.data.RECDATA[0].URL }

            })
            .catch((err) => {
                //return {EntityID:RecAreaID, URL:'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg'}
                return { id: RecAreaID, url: 'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg' }
            })
    },
}