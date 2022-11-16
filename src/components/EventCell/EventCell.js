import React from "react";
import style from './EventCell.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Survey from "../Survey/Survey";
import TicketmasterCont from "../Ticketmaster/TicketmasterCont";
import RecreationCont from "../Recreation/RecreationCont";
import EventMainPage from "../EventMainPage/EventMainPage";

export default function EventCell(props) {
    return <div id={props.id} key={props.id} className={style.boxMap}
                style={{background: `url(${props.image}) no-repeat center/cover`}}>
        <NavLink to={props.id}>
            {props.name}
        </NavLink>

    </div>

}