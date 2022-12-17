import React from "react";
import style from "./Facility.module.css";
import EventCell from "../EventCell/EventCell";
import Preloader from "../Preloader/Preloader";

export default function  GetArrEventCell(props) {

    let arrEventCell = props.arrayNameFacility.map(data =>{
        let image = 'https://live.staticflickr.com/65535/49925175213_3c0d56078b_b.jpg';
        if(props.getIsLoading){
            return <Preloader/>
        }
        return <EventCell id={data.FacilityID} name={data.FacilityName} image={image}/>
    })


   return <div className={style.box}>
        {arrEventCell}
    </div>

}
