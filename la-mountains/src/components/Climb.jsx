import  React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Climb.module.css';

const Climb = () => {
    const climbs = [
        { name: "MOUNTAIN 1", schedule: "./images/Climb-Schedule.png" },
        { name: "MOUNTAIN 2", schedule: "./images/Climb-Schedule.png" }
    ]

    const [selectedClimb, setSelectedClimb] = useState(0);

    const getClimbButtons = () => {
        return climbs.map((climb, index) => {
            if (index === selectedClimb) {
                return <div key={index} className={styles.selectedClimb}><p>{climb.name}</p></div>
            
            } else {
                return <div key={index} className={styles.climbButton} onClick={() => setSelectedClimb(index)}><p>{climb.name}</p></div>
            }
        });
    }

    const getAccordian = () => {
        const accordianItems = []
        for (let index = 0; index < climbs.length; index++) {
            if (index === selectedClimb) {
                accordianItems.push(
                    <div key={index} className={styles.selectedClimb}><p>{climbs[selectedClimb].name}</p></div>
                ) 
                accordianItems.push(
                    <img key={climbs.length} src={climbs[selectedClimb].schedule}/>
                )
            } else {
                accordianItems.push(<div key={index} className={styles.climbButton} onClick={() => setSelectedClimb(index)}><p>{climbs[index].name}</p></div>)
            }
        }
        return accordianItems;
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
                    {getClimbButtons()}
                </div>
            </div>
            <div id={styles.ClimbMain}> 
                <div id={styles.ClimbMainContainer}>
                    <img src={climbs[selectedClimb].schedule}/>
                </div>


                <div id={styles.ClimbMainContainerMobile}>
                    { getAccordian() }
                </div>
            </div>

            <div id={styles.ClimbFooter}> 
                <div id={styles.ClimbFooterLeft}>
                    <Link to="/">
                        <img src="./images/Climb-Logo.png"/>
                        <img src="./images/Climb-Logo-Text.png"/>
                    </Link>
                </div>
                <div id={styles.ClimbFooterRight}>
                    <p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>
    );
}

export default Climb;