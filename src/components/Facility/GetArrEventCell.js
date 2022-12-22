import React from "react";
import style from "./Facility.module.css";
import EventCell from "../EventCell/EventCell";
import Preloader from "../Preloader/Preloader";


export default function GetArrEventCell(props) {
    console.log(props.arrayNameFacility)
    debugger;
    let arrEventCell = props.arrayNameFacility.map(data => {
        let image;

        let result = props.arrayMediaFacility.find(function (item, index, array) {
            return item.facilityId === data.FacilityID
        });

        if (result?.url === undefined) {
            props.handleFetchFacilityMedia(data.FacilityID);
        } else {
            image = result.url;
        }

        if (props.getIsLoading) {
            return <Preloader/>
        }
        return <EventCell id={data.FacilityID} name={data.FacilityName} image={image}/>
    })


        return <div className={style.box}>
            {arrEventCell}



        </div>



}
