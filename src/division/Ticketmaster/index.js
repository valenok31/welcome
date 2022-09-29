import {Link, NavLink, Route, Routes} from "react-router-dom";
import Ticketmaster from "../Ticketmaster/ticketmaster";


function Home() {
    return (
        <div>
            Home
        </div>
    )
}

export default function Menus() {
    return (
        <div id='field' className='field'>
            <div id='fieldLeft' className='field__left'>
                <div className='field__left-fixed' id='inputClick'>
                    <NavLink to="/">
                        <div>Home</div>
                    </NavLink>
                    <NavLink to="/ticketmaster">
                        <div>Ticketmaster</div>
                    </NavLink>
                    <div id='inputAllData'></div>
                    <input type='text' id='keywordS'/>
                    <button id='search'>search</button>
                    <input id="age" type="date" value="2022-09-29" min="2022-09-14" max="2100-01-01"/><br/>
                </div>
            </div>

            <div className="App">
                <Routes>
                    <Route path="/ticketmaster" element={<Ticketmaster />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>


        </div>
    )
}