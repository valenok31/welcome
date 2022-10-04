import {Link} from "react-router-dom";
import React from "react";
import * as axios from "axios";
let eretel;
function CellAttraction() {

    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=&classificationName=&size=102&
    startDateTime=&endDateTime=&countryCode=US&apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV`)
        .then(function (response) {
            console.log(response.data._embedded.events[0].name)
            eretel = response.data._embedded.events[0].name


        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    return (
        <div className='cell'>
            {eretel}
        </div>
    )
}

export default CellAttraction;