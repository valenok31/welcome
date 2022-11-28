import React from "react";
import style from './Survey.module.css'
import {NavLink} from "react-router-dom";



const Survey = (props) => {
    return (
        <div className={style.survey}>
            <NavLink to={props.choiceLeft} className={style.survey__navLink}>
                {props.choiceLeft}
            </NavLink>
            <NavLink to={props.choiceRight} className={style.survey__navLink}>
                {props.choiceRight}
            </NavLink>
            <NavLink to={props.choiceV} className={style.survey__navLink}>
                {props.choiceV}
            </NavLink>
        </div>
    )
}

export default Survey;