import logo from './logo.svg';
import Menus from '../src/division/Ticketmaster/index'
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom"
import * as PropTypes from "prop-types";

function Home() {
    return (
        <div>
            Ghbdtn
        </div>
    )
}


function App() {
    return (

            <div className="App">
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/Menus">
                    Menus
                </NavLink>
                <Routes>
                        <Route path="/Menus" element={<Menus />} />
                        <Route path="/" element={<Home />} />
                </Routes>
            </div>
    )
}

export default App;
