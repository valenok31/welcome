import * as axios from "axios";
import React from "react";

export const fetchEvents = {

    fromTicketmaster(size = 5, page = 0, settings) {
        const instanceTicketmaster = axios.create({
            baseURL: "https://app.ticketmaster.com/discovery/v2/",
        })
        return instanceTicketmaster.get(`events.json?size=${size}&page=${page}&stateCode=TN&countryCode=&keyword=${settings.search}&source=&classificationName=${settings.classificationName}&apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV`)
            .then(response => {
                return response.data;
            })
            .catch((err) => {
                //console.log('hgakjshkwl')
                console.log(err.message)
            })
    },

    fromTicketmasterDetails(id) {
        const instanceTicketmaster = axios.create({
            baseURL: "https://app.ticketmaster.com/discovery/v2/",
        })
        return instanceTicketmaster.get(`events/${id}.json?apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV`)
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
        return instanceRecreation.get(`facilities?limit=${limit}&offset=${offset}&apikey=53351234-6c6c-4392-a4b8-d38d53df1462`)
            .then(response => {
                return response.data;
            })
            .catch((err) => {
            })
    },

    fromArrImages(RecAreaID) {
        const instanceRecreation = axios.create({
            baseURL: `https://ridb.recreation.gov/api/v1/facilities/${RecAreaID}/media?apikey=53351234-6c6c-4392-a4b8-d38d53df1462`,
        })
        return instanceRecreation.get()
            .then((response) => {
                return {id: RecAreaID, url: response.data.RECDATA[0].URL}
            })
            .catch((err) => {
                return {id: RecAreaID, url: 'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg'}
            })
    },

    fromRecreationRecArea(RecAreaID) {
        const instanceRecreation = axios.create({
            //baseURL: `https://ridb.recreation.gov/api/v1/recareas/${RecAreaID}/recareaaddresses?apikey=53351234-6c6c-4392-a4b8-d38d53df1462`,
            baseURL: `https://ridb.recreation.gov/api/v1/facilities/${RecAreaID}/facilityaddresses?apikey=53351234-6c6c-4392-a4b8-d38d53df1462`,
        })
        return instanceRecreation.get()
            .then(response => {
                if(response.data.METADATA.RESULTS.TOTAL_COUNT>0){
                    return response.data.RECDATA[0];
                }else{
/*                   return {
                        "AddressCountryCode": "no data",
                        "AddressStateCode": "no data",
                        "City": "no data",
                        "LastUpdatedDate": "no data",
                        "PostalCode": "no data",
                        "RecAreaAddressID": "no data",
                        "RecAreaAddressType": "no data",
                        "RecAreaID": RecAreaID,
                        "RecAreaStreetAddress1": "no data",
                        "RecAreaStreetAddress2": "no data",
                        "RecAreaStreetAddress3": "no data"
                    }*/
                    return {
                        "AddressCountryCode": "no data",
                        "AddressStateCode": "no data",
                        "City": "no data",
                        "LastUpdatedDate": "no data",
                        "PostalCode": "no data",


                        "FacilityAddressID": "no data",
                        "FacilityAddressType": "no data",
                        "FacilityID": RecAreaID,
                        "FacilityStreetAddress1": "no data",
                        "FacilityStreetAddress2": "no data",
                        "FacilityStreetAddress3": "no data",
                    }
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },

    fromRecreationAreas(RecAreaID) {
        const instanceRecreation = axios.create({
            baseURL: `https://ridb.recreation.gov/api/v1/facilities/${RecAreaID}?apikey=53351234-6c6c-4392-a4b8-d38d53df1462`,
        })
        return instanceRecreation.get()
            .then(response => {
                return response.data;
            })
            .catch((err) => {
                console.log(err)
            })
    },


}