import React from "react";

function Paginator (props){
let arrPage=[];
    let countPage =  Math.ceil(props.getTotalCount/props.getLimitPage);
for(let i=0; i<=countPage; i++){
    arrPage.push(i)
}
countPage = arrPage.map(k=>{
    return <span>{k} </span>
})
    return <div>{countPage}</div>
}

export default Paginator;