import React from "react"
import { Link } from 'react-router-dom';
import '../App.css';
 

const Home = () => {
    console.log("Homepage")
    return (
    <div className="App">
      <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div id="nav">
                    <div id="nav-grid">
                        <div id="brand"><Link to="/">Los Angeles Mountains</Link></div>
                        <div>
                            <ul id="nav-links">
                                <li><Link to="/history">01. HISTORY</Link></li>
                                <li><Link to="/team">02. TEAM</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Home