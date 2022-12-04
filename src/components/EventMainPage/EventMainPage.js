import React from "react";
import style from './EventMainPage.module.css'


export default function EventMainPage(props) {
    return <>
        <div>
            <img src={props.url} />
        </div>
        <div>
            {props.name}
            <br/>
            {props.description}
            <hr/>
            {props.segment} - {props.genre}
            <br/>
            {props.address}, {props.city}, {props.state} {props.country}
        </div>
    </>

}