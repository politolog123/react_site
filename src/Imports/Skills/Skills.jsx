import React from "react";
import classes from "./Skills.module.css";
import Block from "../Block /Block";

function Skills(){
    return(
       <div className={classes.skills_wrap}>
        <h2 className={classes.h2}>Skills</h2>
        <p className={classes.p}>It work in such programs as</p>
        <div className={classes.wrapper_ilustration}>   
        <Block  name="Adobe Photoshop" picture={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKeJiiJQFduXOI2sZvyEKnzClhm80mtE1lkwGXT4&s'}
        picture1={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKeJiiJQFduXOI2sZvyEKnzClhm80mtE1lkwGXT4&s'}
        picture2={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKeJiiJQFduXOI2sZvyEKnzClhm80mtE1lkwGXT4&s'}
        picture3={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKeJiiJQFduXOI2sZvyEKnzClhm80mtE1lkwGXT4&s'}
        picture4={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKeJiiJQFduXOI2sZvyEKnzClhm80mtE1lkwGXT4&s'}
        picture5={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKeJiiJQFduXOI2sZvyEKnzClhm80mtE1lkwGXT4&s'} />
        <Block  name="Adobe Illustrator" picture={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbn9ioAgu9BKSMHWiXgDLkpdc5yDvpvpknbez85yW&s'} 
        picture1={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbn9ioAgu9BKSMHWiXgDLkpdc5yDvpvpknbez85yW&s'}
        picture2={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbn9ioAgu9BKSMHWiXgDLkpdc5yDvpvpknbez85yW&s'}
        picture3={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbn9ioAgu9BKSMHWiXgDLkpdc5yDvpvpknbez85yW&s'}
        picture4={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbn9ioAgu9BKSMHWiXgDLkpdc5yDvpvpknbez85yW&s'}
        picture5={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbn9ioAgu9BKSMHWiXgDLkpdc5yDvpvpknbez85yW&s'}/>
        <Block  name="Adobe After Effects" picture={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45jPjrfCdQ6pltettdw0ZJOtkGJkqvVSr7eu7sFWx&s'}
        picture1={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45jPjrfCdQ6pltettdw0ZJOtkGJkqvVSr7eu7sFWx&s'}
        picture2={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45jPjrfCdQ6pltettdw0ZJOtkGJkqvVSr7eu7sFWx&s'}
        picture3={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45jPjrfCdQ6pltettdw0ZJOtkGJkqvVSr7eu7sFWx&s'}
        picture4={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45jPjrfCdQ6pltettdw0ZJOtkGJkqvVSr7eu7sFWx&s'}
        picture5={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45jPjrfCdQ6pltettdw0ZJOtkGJkqvVSr7eu7sFWx&s'}/>
        <Block name="Adobe Photoshop" picture={'https://klike.net/uploads/posts/2019-05/1556945364_1.jpg'} 
        picture1={'https://klike.net/uploads/posts/2019-05/1556945364_1.jpg'} 
        picture2={'https://klike.net/uploads/posts/2019-05/1556945364_1.jpg'}
        picture3={'https://klike.net/uploads/posts/2019-05/1556945364_1.jpg'} 
        picture4={'https://klike.net/uploads/posts/2019-05/1556945364_1.jpg'} 
        picture5={'https://klike.net/uploads/posts/2019-05/1556945364_1.jpg'}  />       
        </div>
       </div>
    ) ;
}

export default Skills;