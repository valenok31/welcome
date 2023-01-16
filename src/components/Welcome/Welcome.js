import React from "react";
import s from './Welcome.module.css'

function Welcome(props) {
   let  stateButton = [2,3,5,3,5,6,43,5]
    let currentPlus = stateButton.map((r)=>{
        return <div>
            {r}
        </div>
    })

    return (
        <div className={s.borderBox}>
            {currentPlus}
        </div>
    )
}

export default Welcome;