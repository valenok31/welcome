import React from "react";
import style from './Ticketmaster.module.css'

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
        return <div id={id} key={id} className={style.boxMap}
                    style={{background: `url(${image}) no-repeat center/cover`}}>
            {eventTicketmaster.name}
        </div>

    })
    return (
        <div id='fieldPlaying' className={style.field__playing}>
            {handleEventsTicketmaster}
        </div>
    )
}