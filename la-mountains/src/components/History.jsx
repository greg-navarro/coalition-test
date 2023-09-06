import React from "react"
import { Link } from 'react-router-dom';
import Carousel from './Carousel.jsx'
import styles from './History.module.css'

const History = () => {

    return (
        <div id={styles.history}>
  
        <div id={styles.nav}>
            <div id={styles.navgrid}>
                <div id={styles.brand}><Link to="/"><img src="./images/logoandtext.png" alt="Los Angeles Mountains Logo" /></Link></div>
                <div>
                    <ul id={styles.navlinks}>
                        <li><Link to={"/history"}>01. HISTORY</Link></li>
                        <li><Link to={"/climb"}>02. TEAM</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div id={styles.main}>
            <div className={styles.mainflexcontainer}>
                <div id={styles.mainlabel}><img alt="icon for title section" src="./images/title-history.png" /></div>
                <div id={styles.maintext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. </div>
            </div>
            <div id={styles.carousel}>
                <Carousel />
            </div>
        </div>
        
    </div>
    );
}

export default History