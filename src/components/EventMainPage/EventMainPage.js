import React from "react";

export default function EventMainPage(props) {
    return <>
        <div>
            <img src={props.url}/>
        </div>
        <div>
            {props.name}
            <hr/>
            {props.segment} - {props.genre}
            <br/>
            {props.address}, {props.city}, {props.state}{props.country}
        </div>
    </>

}