import React from "react";
import classes from "./Portfolio.module.css";

function Portfolio(){
    return(
        <div className={classes.portfolio}>
            <h2>Portfolio</h2>
            <div className={classes.picture}>
                <img className={classes.picture1} src="" alt="" width="936" height="510"/>
                <p>Online fashion store - Homepage</p>
            </div>
            <div className={classes.picture}>
                <img className={classes.picture2} src="" alt=""width="936" height="510"/>
                <p>Reebok Store - Concept</p>
            </div>
            <div className={classes.picture}>
                <img className={classes.picture3} src="" alt="" width="936" height="510"/>
                <p>Braun Landing Page - Concept</p>
            </div>
            <img src="" alt="" />
        </div>
    )
}


export default Portfolio;