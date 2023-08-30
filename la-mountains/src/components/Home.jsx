import React from "react"
import { Link } from 'react-router-dom';
import './Home.css';

 

const Home = () => {

    return (
    <div id="home">
      <div id="nav">
        <div id="nav-grid">
            <div id="brand"><Link to="/">Los Angeles Mountains</Link></div>
            <div>
                <ul id="nav-links">
                    <li><Link to="/history">01. HISTORY</Link></li>
                    <li><Link to="/">02. TEAM</Link></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Home