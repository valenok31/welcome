import React from "react";
import style from './Recreation.module.css'

export default function Recreation(props) {
    //console.log(props.getEventsRecreation);

    let mapRequestgg = props.getEventsRecreation.map((r, i) => {
        let image = 'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg';
        /*        if (!props.getEventsRecreationImages[r.RecAreaID]) {
                    props.handleFetchEventsImages(r.RecAreaID);
                }*/

        for (let arrImages of props.getEventsRecreationImages) {
            if (arrImages.id == r.RecAreaID) {
                //console.log('excellent!!')
                image = arrImages.url;
            }
        }

        let user = props.getEventsRecreationImages.find(item => item.id == r.RecAreaID);
        if (user){
            console.log(user.id);
        }
        if (!user){
            props.handleFetchEventsImages(r.RecAreaID);
        }

        console.log(r.RecAreaID);

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
