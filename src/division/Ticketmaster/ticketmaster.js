import * as axios from "axios";
import CellAttraction from './../../components/CellAttraction/CellAttraction'


export default function Ticketmaster() {
    return (
        <div id='fieldPlaying' className='field__playing'>
            <CellAttraction/>
            <CellAttraction/>
        </div>
    )
}