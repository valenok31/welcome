import React from "react";
import style from './Paginator.module.css'

function Paginator(props) {
    let arrPage = [];
    let countPage = Math.ceil(props.getTotalCount / props.getLimitPage);
    if (countPage > props.deepPage) {
        countPage = props.deepPage;
    }
    for (let i = 0; i <= countPage; i++) {
        arrPage.push(i)
    }
    countPage = arrPage.map(k => {
        if (props.getCurrentPage === k) {
            return <span><b>{k + 1}</b> </span>
        }
        if (props.getCurrentPage - 4 > k && k === 1) {
            return <span onClick={() => {
                props.setCurrentPage(0);
            }}>1...</span>
        }
        if (props.getCurrentPage + 7 <= k && k === Math.ceil(props.deepPage) - 1) {
            return <span onClick={() => {
                props.setCurrentPage(Math.ceil(props.deepPage) - 1);
            }}>...{Math.ceil(props.deepPage)}</span>
        }

        if (props.getCurrentPage + 5 < k || props.getCurrentPage - 5 > k) {
            return;
        }
        return <span onClick={() => {
            props.setCurrentPage(k);
        }}>{k + 1} </span>
    })
    return <div className={style.paginator}>{countPage}</div>
}

export default Paginator;