import React from 'react'
import classes from './HeroContactText.module.css'
import {withRouter} from 'react-router-dom'


const heroContactText=(props)=>{
    
    
    const returnHome=()=>{
       props.history.push('/')
    }
    
    return (
        <div className={classes.HeroText}>
           <h1>Contact</h1>
           <div className={classes.Underline}></div>
           <button onClick={returnHome}>Return Home</button>
           <button onClick={props.opened}>Contact us</button>
        </div>
    )
}

export default withRouter(heroContactText)