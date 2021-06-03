import React from 'react'
import classes from './HeroRoomsText.module.css'
import {withRouter} from 'react-router-dom'


const heroRoomsText= (props)=>{
    
    
    const returnHome=()=>{
       props.history.push('/')
    }
    
    return (
        <div className={classes.HeroRoomsText}>
           <h1>Our Rooms</h1>
           <div className={classes.Underline}></div>
           <button onClick={returnHome}>Return Home</button>
        </div>
    )
}


export default withRouter(heroRoomsText)