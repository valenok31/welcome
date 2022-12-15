import React from "react";
import style from "./Facility.module.css";
import EventCell from "../EventCell/EventCell";

export default function GetArrEventCell(props) {

    let arrEventCell = props.arrName.map(data =>{
        return <EventCell id={data.id} name={data.name} image={data.image}/>
    })


   return <div className={style.box}>
        {arrEventCell}
    </div>

}
