import React from "react";
import s from './Welcome.module.css'
import * as axios from "axios";

function Welcome(props) {
let a={}

    const options = {
        fromFacility(limit = 5, offset = 0) {
            const instanceRecreation = axios.create({
                baseURL: `https://api.weatherapi.com/v1/`,
            })
            return instanceRecreation.get(`current.json?key=4e29dfe6fb834ea29ab152532232301&q=Moscow`)
                .then(response => {
                    console.log(response.data)
                    a=response.data
                    return response.data;
                })
                .catch((err) => {
                    console.log('no data')
                })
        },
    };

options.fromFacility();


    return (
        <div className={s.borderBox}>
            {a}
        </div>
    )
}

export default Welcome;