import logo from './logo.svg';
import Menus from '../src/division/Ticketmaster/index'
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom"
import * as PropTypes from "prop-types";
import Survey from "./components/Survey/Survey";


function App() {
    return (
        <div>
            <Survey/>
            <Menus/>
        </div>
    )
}

export default App;
