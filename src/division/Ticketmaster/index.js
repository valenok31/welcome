import Cell from '../Ticketmaster/ticketmaster'
import {Link} from "react-router-dom";



export default function Menus() {
    return (
        <div id='field' className='field'>
            <div id='fieldLeft' className='field__left'>
                <div className='field__left-fixed' id='inputClick'>
                    <div id='inputAllData'></div>
                    <input type='text' id='keywordS'/>
                    <button id='search'>search</button>
                    <input id="age" type="date" value="2022-09-29" min="2022-09-14" max="2100-01-01"/><br/>
                </div>
            </div>
            <div id='fieldPlaying' className='field__playing'>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
            </div>
            <div id='detailedDescription' className='noneElem'>0</div>

        </div>
    )
}