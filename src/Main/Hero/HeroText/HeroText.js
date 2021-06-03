import React from 'react'
import classes from './HeroText.module.css'
import {withRouter} from 'react-router-dom'


const heroText=(props)=>{
    
    const goToRooms= ()=>{
        props.history.push('/rooms')
    }
    return (
        <div className={classes.HeroText}>
           <h1>Luxurious Rooms</h1>
           <div></div>
           <h4>Deluxe Swan Rooms starting at $299</h4>
           <button onClick={goToRooms}>OUR ROOMS</button>
        </div>
    )
}

export default withRouter(heroText)