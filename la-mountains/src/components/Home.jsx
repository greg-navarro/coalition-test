import React from "react"
import { Link } from 'react-router-dom';
 

const Home = () => {
    console.log("Homepage")
    return (
    <div className="App">
      <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div id="nav">
                    <div id="nav-grid">
                        <div id="brand"><a href="">Los Angeles Mountains</a></div>
                        <div>
                            <ul id="nav-links">
                                <li><Link to="/history">History</Link></li>
                                <li><a href="#">02. TEAM</a></li>
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