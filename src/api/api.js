import * as axios from "axios";
import React from "react";
import {stopAxios} from "../redux/siteManagement_reducer";

const instance = axios.create({
    //withCredentials: true,
    baseURL: "https://app.ticketmaster.com/discovery/v2/events.json?size=10&countryCode=US&apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV",
})




export const eventsAPI = {
    getStatus(stopA) {

        //return   axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=102&countryCode=US&apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV`)
        //return instance.get('events.json?size=102&countryCode=US&apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV')
        if(!stopA){
            return instance.get()
                .then(response => {
                    //debugger;
                    //console.log('axios ' + response.data.page.size);
                    return response.data._embedded.events;
                    //return '2324';
                })
                .catch((err)=>{
                    console.log(err)
                    debugger;
                    this.props.stopAxios(true);

                })
        }


    },
}