import  React, { useState } from "react";
import styles from './Climb.module.css';

const Climb = () => {
    const climbs = [
        { name: "Mountain 1", schedule: "./images/Climb-Schedule.png" },
        { name: "Mountain 2", schedule: "./images/Climb-Schedule.png" }
    ]

    const [selectedClimb, setSelectedClimb] = useState(0);

    const getClimbButtons = () => {
        return climbs.map((climb, index) => {
            if (index === selectedClimb) {
                return <div key={index} className={styles.selectedClimb} >{climb.name}</div>
            
            } else {
                return <div key={index} onClick={() => setSelectedClimb(index)}>{climb.name}</div>
            }
        });
    }

    return (
        <div id={styles.Climb}>
            <div id={styles.ClimbHeader}>
                <div id={styles.ClimbHeaderFlexContainer}>
                    <img src="./images/02_.png" />
                    <img src="./images/Climb.png" />
                    <p>Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. </p>
                </div>
            </div>
            <div id={styles.ClimbButtons}>
                <div id={styles.ClimbButtonsFlexContainer}>
                    <div to="/climb/1">MOUNTAIN 1</div>
                    <div to="/climb/2">MOUNTAIN 2</div>
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