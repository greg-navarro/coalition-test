import React from "react"
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

 

const Home = () => {

    return (
    <div id={styles.home}>
      <div id={styles.nav}>
        <div id={styles.navgrid}>
            <div id={styles.brand}><Link to="/"><img src="./images/logo.png" alt="Los Angeles Mountains Logo" /></Link></div>
            <div>
                <ul id={styles.navlinks}>
                    <li><Link to="/history">01. HISTORY</Link></li>
                    <li><Link to="/climb">02. TEAM</Link></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Home