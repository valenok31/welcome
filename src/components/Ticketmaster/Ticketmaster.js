import React from "react";
import style from './Ticketmaster.module.css'
import EventCell from "./../EventCell/EventCell";

export default function Ticketmaster(props) {
    let getEventsTicketmaster = props.getEventsTicketmaster;
    let handleEventsTicketmaster = getEventsTicketmaster.map((eventTicketmaster, id) => {
        let image;
        for (let eventImages of eventTicketmaster.images) {
            if (eventImages.height < 200 || eventImages.height > 600) {
                continue
            }
            image = eventImages.url;
        }
        return <EventCell id={id} image={image} name={eventTicketmaster.name}/>


    })
    return (<>
            {handleEventsTicketmaster}
        </>
    )
}