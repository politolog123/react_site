import React from "react";
import classes from "./Contacts.module.css";

function Contacts(){
    return(
        <div className={classes.contacts}>
            <h2 className={classes.h2}>Contacts</h2>
            <p className={classes.p}>Want to know more or just chat? You are welcome!</p>
            <button className={classes.button}>Send message</button>
            <div className={classes.logo}>
            <img className={classes.image} alt="" width="342" height="40"/>
            </div>
            <p className={classes.p1}>Like me on LinkedIn, Instagram, Behance, Dribble</p>
        </div>

    )
}
export default Contacts;