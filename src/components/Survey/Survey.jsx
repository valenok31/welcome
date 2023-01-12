import React from "react";
import style from './Survey.module.css'
import {NavLink} from "react-router-dom";
import Ymap from "../Ymap/Ymap";



const Survey = (props) => {
    return (
        <div className={style.survey}>
            <NavLink to={props.choiceLeft} className={style.survey__navLink}>
                {props.choiceLeft}
            </NavLink>
            <NavLink to={props.choiceRight} className={style.survey__navLink}>
                {props.choiceRight}
            </NavLink>
            <NavLink to='facility' className={style.survey__navLink}>
                Facility
            </NavLink>
{/*            <NavLink to='ymap' className={style.survey__navLink}>
                ymap
            </NavLink>*/}
        </div>
    )
}

export default Survey;