import React from "react";
import style from './EventCell.module.css'

export default function EventCell(props) {
    return <div id={props.id} key={props.id} className={style.boxMap}
        style={{ background: `url(${props.image}) no-repeat center/cover` }}>
        {props.name}
    </div>

}