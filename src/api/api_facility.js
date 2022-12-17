import * as axios from "axios";
import React from "react";

export const fetchEvents = {

    fromFacility(limit = 5, offset = 0) {
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
}