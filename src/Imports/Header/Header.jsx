import React from "react";
import classes from "./Header.module.css";

function Header(){
    return (
        <div className={classes.header_block}>
            <div className={classes.header_li}>
                <li className={classes.li}><a href=""></a>Home</li>
                <li><a href=""></a>About me</li>
                <li><a href=""></a>Skills</li>
                <li><a href=""></a>Portfolio</li>
                <li><a href=""></a>Contacts</li>
            </div>
        </div>
    )
};  

export default Header;