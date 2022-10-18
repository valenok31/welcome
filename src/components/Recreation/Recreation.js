import React from "react";
import style from './Recreation.module.css'
import axios from "axios";

export default function Recreation(props) {
    let mapRequestgg = props.getCostCity.map((r, i) => {
        let image = 'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg';

        return ()=>{
           return axios
            .get(`https://ridb.recreation.gov/api/v1/recareas/${r.RecAreaID}/media?apikey=53351234-6c6c-4392-a4b8-d38d53df1462`)
                .then(function (response) {
                    //console.log(response.data.RECDATA[0].URL)
                    return <div id={i} key={i} className={style.boxMap}
                                style={{background: `url(${response.data.RECDATA[0].URL}) no-repeat center/cover`}}>
                        {r.RecAreaName}
                    </div>

                }).catch(function (response) {
                    //console.log("ERR")
                    return <div id={i} key={i} className={style.boxMap}>
                        {r.RecAreaName}
                    </div>
                });
        }
    })
    console.log(mapRequestgg);
    return (
        <div id='fieldPlaying' className={style.field__playing}>
            {mapRequestgg}
        </div>
    )
}
