import React from "react";
import s from './Welcome.module.css'

function Welcome(props) {
   let  stateButton = props.stateButton;
    let currentPlus = ()=>{
        alert('34')
        return stateButton=5;
    }

    return (
        <div className={s.borderBox}>
            <button onClick={currentPlus}>{stateButton}</button>
        </div>
    )
}

export default Welcome;