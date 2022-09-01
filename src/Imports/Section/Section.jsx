import React from "react";
import classes from "./Section.module.css";

function Section(){
    return(
        <div className={classes.section_wrap}>
            <h2 className={classes.text}>Denis Novik</h2>
            <p className={classes.text1}>UX | UI designer 24 years old, Minsk</p>
            <div className={classes.together}>
                <span>RU |</span>
                <span>ENG</span>
            </div>
            {/* <div>
                <img className={classes.img} src="" alt="" />
            </div> */}
        </div>
    )
}

export default Section;