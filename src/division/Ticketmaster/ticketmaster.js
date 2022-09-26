import {Link} from "react-router-dom";
import axios from "axios";


function Cell() {
    return (
        <div className='cell'>
            <Link to="/invoices">infoTest</Link>
        </div>
    )
}

export default function Ticketmaster() {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=&classificationName=&size=102&
    startDateTime=&endDateTime=&countryCode=US&apikey=zj1LCjwJVG5B88c4HGfjkaY6PAMxz6nV`)
        .then(function (response) {
            // handle success
            let inputAllData = response.data.page.totalElements;
            let infoTest = response.data._embedded.events;
            console.log(infoTest);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })


    return (
        <div id='fieldPlaying' className='field__playing'>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
        </div>
    )
}