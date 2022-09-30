import './App.css';
import {NavLink, Route, Routes} from "react-router-dom"
import Survey from "./components/Survey/Survey";
import Ticketmaster from "./division/Ticketmaster/ticketmaster";
import React from "react";
import style from "./components/Survey/Survey.module.css";


function Nature() {
    return <div>nature</div>
}

function App() {
    return (
        <div>
            <NavLink to="/">
                home
            </NavLink>
            <Routes>
                <Route path="/ticketmaster" element={<Ticketmaster/>}/>
                <Route path="/" element={<Survey choiceLeft='nature' choiceRight='ticketmaster'/>}/>
                <Route path="/nature" element={<Survey choiceLeft='few' choiceRight='many'/>}/>
                <Route path="/nature/few" element={<Survey choiceLeft='1' choiceRight='2'/>}/>
                <Route path="/nature/many" element={<Survey choiceLeft='3' choiceRight='4'/>}/>
            </Routes>
        </div>
    )
}

export default App;
