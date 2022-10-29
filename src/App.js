import './App.css';
import {NavLink, Route, Routes} from "react-router-dom"
import Survey from "./components/Survey/Survey";
import React from "react";
import TicketmasterCont from "./components/Ticketmaster/TicketmasterCont";
import RecreationCont from "./components/Recreation/RecreationCont";


let App = () => {
    return (
        <div>
            <NavLink to="/">
                home
            </NavLink>
            <Routes>
                <Route path='/' element={<Survey choiceLeft='nature' choiceRight='ticketmaster'/>}/>
                <Route path='/ticketmaster'
                       element={<Survey choiceLeft='ticketmaster20' choiceRight='ticketmaster5'/>}/>
                <Route path='/ticketmaster/ticketmaster20' element={<TicketmasterCont size="20"/>}/>
                <Route path='/ticketmaster/ticketmaster5' element={<TicketmasterCont size="5"/>}/>
                <Route path='/nature' element={<Survey choiceLeft='recreation' choiceRight='manyN'/>}/>
                <Route path='/nature/recreation' element={<RecreationCont/>}/>
            </Routes>
        </div>
    )
}

export default App;
