import {Link} from "react-router-dom";



export default function Cell(){
    return (
        <div className='cell'>
            <Link to="/invoices">Invoices</Link>
            {/*<div id='1' data-about='ok'>name</div>*/}
        </div>
    )
}