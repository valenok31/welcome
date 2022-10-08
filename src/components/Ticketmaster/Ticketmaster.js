import React from "react";
import {eventsAPI} from "../../api/api";

export default function Ticketmaster(props) {
    //console.log(eventsAPI.getStatus())
    return (
        <div id='fieldPlaying' className='field__playing'>
            {props.getCostCity}
        </div>
    )
}