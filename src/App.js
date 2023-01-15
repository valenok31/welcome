import './App.css';
import {NavLink, Route, Routes} from "react-router-dom"
import Survey from "./components/Survey/Survey";
import React from "react";
import TicketmasterCont from "./components/Ticketmaster/TicketmasterCont";
import RecreationCont from "./components/Recreation/RecreationCont";
import GetListFacility from "./components/Facility/GetListFacility";
import NormalizerForFacility from "./components/Facility/NormalizerForFacility";
import EventMainPage from "./components/EventMainPage/EventMainPage";
import NormalizerForTicketmaster from "./components/Ticketmaster/NormalizerForTicketmaster";
import NormalizerForRecreation from "./components/Recreation/NormalizerForRecreation";
import Ymap from "./components/Ymap/Ymap";
import Welcome from "./components/Welcome/Welcome";



let App = () => {
    let coordinates=[-88, 35];

    return (
        <div>
            <NavLink to="/">
                home
            </NavLink>
            <Routes>
                <Route path='/' element={<Survey choiceLeft='recreation' choiceRight='ticketmaster' choiceV='recreationV'/>}/>
                <Route path='/ticketmaster' element={<TicketmasterCont/>}/>
                <Route path='/recreation' element={<RecreationCont/>}/>
                <Route path='/facility' element={<GetListFacility/>}/>
                <Route path='/facility/*' element={<NormalizerForFacility/>}/>
                <Route path='/ticketmaster/*' element={<NormalizerForTicketmaster/>}/>
                <Route path='/recreation/*' element={<NormalizerForRecreation/>}/>
                <Route path='/ymap' element={<Ymap   description='description' coordinates={coordinates} name='name' />}/>
                <Route path='/welcome' element={<Welcome stateButton='0'/>}/>

            </Routes>
        </div>
    )
}

export default App;
