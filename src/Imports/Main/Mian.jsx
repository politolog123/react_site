import React from "react";
import classes from "./Mian.module.css";

function Mian(){
    return(
       <div className={classes.mian_wrap}>
        <h2 className={classes.h2}>About me</h2>
        <div className={classes.contain}>
            <p>Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.</p>
            <p>I'm studying at courses "Web and mobile design interfaces" in IT-Academy</p>
            <p>Ready to implement excellent projects with wonderful people.</p>
        </div>
       </div>
    )
}

export default Mian;