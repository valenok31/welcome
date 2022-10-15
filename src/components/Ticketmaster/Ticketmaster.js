import React from "react";
import style from './Ticketmaster.module.css'

export default function Ticketmaster(props) {
    //console.log(props.getCostCity)
    //props.setListAttractions();
    let requestiv7 = props.getCostCity;
    //console.log(requestDiv);
    let mapRequestgg = requestiv7.map((r, i)=>{
        return <div id={i} key={i} className={style.boxMap}>
                {r.name}
            </div>

    })
    return (
        <div id='fieldPlaying' className={style.field__playing}>
          {mapRequestgg}
        </div>
    )
}