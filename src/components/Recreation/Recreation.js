import React from "react";
import style from './Recreation.module.css'

export default function Recreation(props) {
    let arrImg =[];
    let mapRequestgg = props.getEventsRecreation.map((r, i) => {
        let image = 'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg';
        arrImg.push(r.RecAreaID);
        return <div id={i} key={i} className={style.boxMap}
                    style={{background: `url('${image}') no-repeat center/cover`}}>
            {r.RecAreaName}
        </div>
    })
    if(arrImg.length>0){
        console.log(arrImg)
    }

    return (
        <div id='fieldPlaying' className={style.field__playing}>
            {mapRequestgg}
        </div>
    )
}
