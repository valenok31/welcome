import React from "react";
import style from './Recreation.module.css'

export default function Recreation(props) {
    let mapRequestgg = props.getCostCity.map((r, i) => {
        let image = 'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg';
        return <div id={i} key={i} className={style.boxMap}
                    style={{background: `url(${image}) no-repeat center/cover`}}>
            {r.RecAreaName}
        </div>

    })
    return (
        <div id='fieldPlaying' className={style.field__playing}>
            {mapRequestgg}
        </div>
    )
}