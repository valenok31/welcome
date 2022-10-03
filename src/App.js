import './App.css';
import {NavLink, Route, Routes} from "react-router-dom"
import Survey from "./components/Survey/Survey";
import React from "react";
import Ticketmaster from "./division/Ticketmaster/ticketmaster";

function App(props) {

/*    let RoutePath = props.state.surveyTree.tree.map(el => {
        if(el.endTree){
            return <Route path={el.path} element={el.endTree}/>
        }
        return <Route path={el.path} element={<Survey choiceLeft={el.choiceLeft} choiceRight={el.choiceRight}/>}/>
    })*/


    return (
        <div>
            <NavLink to="/">
                home
            </NavLink>
            <Routes>
                <Route path='/' element={<Survey choiceLeft='nature' choiceRight='ticketmaster'/>} />
                <Route path='/ticketmaster' element={<Ticketmaster/>} />
                <Route path='/nature' element={<Survey choiceLeft='fewN' choiceRight='manyN'/>} />
            </Routes>
        </div>
    )
}

export default App;
