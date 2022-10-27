import React from "react";
import style from './Recreation.module.css'
import HightRecreation from "./HightRecreation";

export default function Recreation(props) {
    let arrImg = [];
    props.getEventsRecreation.map((r) => {
        arrImg.push(r.RecAreaID);
    })
    if (arrImg.length > 0) {
        return (
            <div id='fieldPlaying' className={style.field__playing}>
                <HightRecreation arrImg={arrImg} props={props}/>
            </div>
        )
    }
}
