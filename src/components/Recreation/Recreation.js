import React from "react";
import style from './Recreation.module.css'

export default function Recreation(props) {
    let mapRequestgg = props.getCostCity.map((r, i) => {
        let image;
        for (let heig of r.images) {
            if (heig.height < 200 || heig.height > 600) {
                continue
            }
            image = heig.url;
        }
        return <div id={i} key={i} className={style.boxMap}
                    style={{background: `url(${image}) no-repeat center/cover`}}>
            {r.name}
        </div>

    })
    return (
        <div id='fieldPlaying' className={style.field__playing}>
            {mapRequestgg}
        </div>
    )
}