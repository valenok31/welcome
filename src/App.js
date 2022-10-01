import './App.css';
import {NavLink, Route, Routes} from "react-router-dom"
import Survey from "./components/Survey/Survey";
import Ticketmaster from "./division/Ticketmaster/ticketmaster";
import React from "react";

const surveyTree = [
    {
        path: '/',
        choiceLeft: 'nature',
        choiceRight: 'ticketmaster'
    },
    {
        path: '/ticketmaster',
        choiceLeft: 'few',
        choiceRight: 'many'
    },
    {
        path: '/ticketmaster/few',
        choiceLeft: 'nature',
        choiceRight: 'ticketmaster'
    },
    {
        path: '/ticketmaster/many',
        choiceLeft: '56',
        choiceRight: '78',
        endTree: <Ticketmaster />
    },
    {
        path: '/nature',
        choiceLeft: 'few',
        choiceRight: 'many'
    },
    {
        path: '/nature/few',
        choiceLeft: 'ngsdfdgdfgature',
        choiceRight: 'ertgdxfbxzd'
    },
    {
        path: '/nature/many',
        choiceLeft: 'forest',
        choiceRight: 'mountain'
    },
    {
        path: '/nature/many/forest',
        choiceLeft: 'coniferous',
        choiceRight: 'deciduous'
    },
    {
        path: '/nature/many/mountain',
        choiceLeft: 'high',
        choiceRight: 'low'
    },
]

console.log(surveyTree[0].endTree)

let RoutePath = surveyTree.map(el => {
    if(el.endTree){
        return <Route path={el.path} element={el.endTree}/>
    }
    return <Route path={el.path} element={<Survey choiceLeft={el.choiceLeft} choiceRight={el.choiceRight}/>}/>
})

function App() {
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
