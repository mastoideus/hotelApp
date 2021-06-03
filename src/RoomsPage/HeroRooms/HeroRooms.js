import React from 'react'
import classes from './HeroRooms.module.css'
import HeroRoomsText from './HeroRoomsText/HeroRoomsText'


const heroRooms=(props)=>{
    return (
        <div className={classes.HeroRooms}>
           <HeroRoomsText/>
        </div>
    )
}

export default heroRooms