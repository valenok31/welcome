import React from "react";
import {eventsAPI} from "../../api/api";


export default function Ticketmaster(props) {
    //console.log(props.getCostCity)
    props.setListAttractions('wetiouhsdfkjhl');
    return (
        <div id='fieldPlaying' className='field__playing'>
            {props.getCostCity}

        </div>
    )
}