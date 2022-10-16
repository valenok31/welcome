import './App.css';
import {NavLink, Route, Routes} from "react-router-dom"
import Survey from "./components/Survey/Survey";
import React from "react";
import TicketmasterCont from "./components/Ticketmaster/TicketmasterCont";
import RecreationCont from "./components/Recreation/RecreationCont";


let App = (props) => {

    return (
        <div>
            <NavLink to="/">
                home
            </NavLink>
            <Routes>
                <Route path='/' element={<Survey choiceLeft='nature' choiceRight='ticketmaster'/>} />
                <Route path='/ticketmaster' element={<TicketmasterCont />} />
                <Route path='/nature' element={<Survey choiceLeft='fewN' choiceRight='manyN'/>} />
                <Route path='/fewN' element={<RecreationCont />} />
            </Routes>
        </div>
    )
}

export default App;
