import React from "react";

function Paginator (props){
let arrPage=[];
    let countPage =  Math.ceil(props.getTotalCount/props.getLimitPage);
for(let i=1; i<=countPage; i++){
    arrPage.push(i)
}
countPage = arrPage.map(k=>{
    if(props.getCurrentPage===k){
        return <span><b>{k}</b> </span>
    }

    return <span onClick={()=>{
        props.setCurrentPage(k); 
    }}>{k} </span>
})
    return <div>{countPage}</div>
}

export default Paginator;