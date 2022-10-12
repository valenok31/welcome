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

return 1324;
/*      axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=&size=102&
        startDateTime=&endDateTime=&countryCode=US&apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV`)
            .then(response => {
                //debugger;
                console.log('axios ' + response.data.page.size);
                return response.data.page.size;
                //return '2324';
            })
            .catch(
                (error)=>{
                    return error
                }
            );*/
    },
}