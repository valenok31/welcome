import React from "react";
import style from './Recreation.module.css'

export default function Recreation(props) {
   console.log(props.getEventsRecreation);
    let image = 'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg';


    //debugger;

    let mapRequestgg = props.getEventsRecreation.map((r, i) => {


        let user = props.getEventsRecreationImages.find(item => r.RecAreaID == item.id);
        console.log(user)
        user ? image = user.url : props.handleFetchEventsImages(r.RecAreaID)


        return <div id={i} key={i} className={style.boxMap}
                    style={{background: `url('${image}') no-repeat center/cover`}}>
            {r.RecAreaName}
        </div>
    })
    return (
        <div id='fieldPlaying' className={style.field__playing}>
            {mapRequestgg}
        </div>
    )
}
