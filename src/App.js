import './App.css';
import {NavLink, Route, Routes} from "react-router-dom"
import Survey from "./components/Survey/Survey";
import React from "react";
import TicketmasterCont from "./components/Ticketmaster/TicketmasterCont";
import RecreationCont from "./components/Recreation/RecreationCont";
import EventMainPage from "./components/EventMainPage/EventMainPage";
import NormalizerForTicketmaster from "./components/Ticketmaster/NormalizerForTicketmaster";
import NormalizerForRecreation from "./components/Recreation/NormalizerForRecreation";
import Ymap from "./components/Ymap/Ymap";


let App = () => {
    return (
        <div>
            <NavLink to="/">
                home
            </NavLink>
            <Routes>
                {/*<Route path='/' element={<Survey choiceLeft='nature' choiceRight='ticketmaster'/>}/>
                <Route path='/ticketmaster'
                       element={<Survey choiceLeft='ticketmaster5' choiceRight='ticketmaster'/>}/>
                <Route path='/ticketmaster/ticketmaster5' element={<TicketmasterCont size="10"/>}/>
                <Route path='/ticketmaster/ticketmaster' element={<TicketmasterCont/>}/>
                <Route path='/nature' element={<Survey choiceLeft='recreation' choiceRight='manyN'/>}/>
                <Route path='/nature/recreation' element={<RecreationCont/>}/>*/}
                <Route path='/' element={<Survey choiceLeft='recreation' choiceRight='ticketmaster' choiceV='recreationV'/>}/>
                <Route path='/ticketmaster' element={<TicketmasterCont/>}/>
                <Route path='/recreation' element={<RecreationCont/>}/>
                <Route path='/ticketmaster/*' element={<NormalizerForTicketmaster/>}/>
                <Route path='/recreation/*' element={<NormalizerForRecreation/>}/>
                <Route path='/ymap' element={<Ymap/>}/>

            </Routes>
        </div>
    )
}

export default App;
