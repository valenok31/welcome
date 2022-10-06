import axios from "axios";
import React from "react";

const instance = axios.create({
    //withCredentials: true,
    baseURL: "https://app.ticketmaster.com/discovery/v2/",
    //headers: {
       // "apikey": "zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV",
    //},
})

export const eventsAPI = {
    getStatus(){
        console.log('alert')
        debugger;
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=&size=102&
        startDateTime=&endDateTime=&countryCode=US&apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV`)
            .then(response => {
                return response.data.page;
            })
            .catch(
                (error)=>{
                    return error
                }
            );
    },
}