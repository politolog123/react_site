import React from "react";
import classes from "./Block.module.css";

function Block(props){
    return(
        <div className={classes.photoshop}>
            <img src={props.picture} alt="" width="89" height="88"/>
            <p>{props.name}</p>
            <div >
                <div className={classes.photoshop}>
                <img src={props.picture1} alt="" width="26" height="26"/>
                <img src={props.picture2}  alt="" width="26" height="26"/>
                <img src={props.picture3}  alt="" width="26" height="26"/>
                <img src={props.picture4}  alt="" width="26" height="26"/>
                <img src={props.picture5}  alt="" width="26" height="26"/>
                </div>
            </div>
            </div>
    )
}

export default Block;