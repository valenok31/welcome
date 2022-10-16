import * as axios from "axios";
import React from "react";

const instance = axios.create({
    //withCredentials: true,
    baseURL: "https://app.ticketmaster.com/discovery/v2/events.json?size=10&countryCode=US&apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV",
})




export const eventsAPI = {
    getStatus() {

            return instance.get()
                .then(response => {
                    return response.data._embedded.events;
                })
                .catch((err)=>{
                    console.log(err.messages)
                })
    },
}