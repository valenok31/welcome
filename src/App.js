import './App.css';
import {NavLink, Route, Routes} from "react-router-dom"
import Survey from "./components/Survey/Survey";
import React from "react";

function App(props) {
debugger;
    let RoutePath = props.state.surveyTree.tree.map(el => {
        if(el.endTree){
            return <Route path={el.path} element={el.endTree}/>
        }
        return <Route path={el.path} element={<Survey choiceLeft={el.choiceLeft} choiceRight={el.choiceRight}/>}/>
    })

    return (
        <div>
            <NavLink to="/">
                home
            </NavLink>
            <Routes>
                {RoutePath}
            </Routes>
        </div>
    )
}

export default App;
