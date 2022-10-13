import React from "react";
import style from './Ticketmaster.module.css'

export default function Ticketmaster(props) {
    //console.log(props.getCostCity)
    //props.setListAttractions();
    let requestDiv = props.getCostCity;
    //console.log(requestDiv);
    let mapRequest = requestDiv.map((r, i)=>{
        return <div id={i} key={i} className={style.boxMap}>
                {r.name}
            </div>

    })
    return (
        <div id='fieldPlaying' className={style.field__playing}>
          {mapRequest}
        </div>
    )
}