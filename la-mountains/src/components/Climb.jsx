import  React from "react";
import styles from './Climb.module.css';
import { Link } from "react-router-dom";

const Climb = () => {

    return (
        <div id={styles.Climb}>
            <div id={styles.ClimbHeader}>
                <div id={styles.ClimbHeaderFlexContainer}>
                    <h1>02. CLIMB</h1>
                    <p>Find your next climb</p>
                </div>
            </div>
            <div id={styles.ClimbButtons}>
                <div id={styles.ClimbButtonsFlexContainer}>
                    <Link to="/climb/1">MOUNTAIN 1</Link>
                    <Link to="/climb/2">MOUNTAIN 2</Link>
                </div>
            </div>
            <div id={styles.ClimbMain}> 
                <div id={styles.ClimbMainContainer}>
                    <img src="./images/Climb-Schedule.png"/>
                </div>
            </div>
            <div id={styles.ClimbFooter}> 
                <div id={styles.ClimbFooterLeft}>
                    <img src="./images/Climb-Logo.png"/>
                    <img src="./images/Climb-Logo-Text.png"/>
                </div>
                <div id={styles.ClimbFooterRight}>
                    <p>© 2021 Climb. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Climb;