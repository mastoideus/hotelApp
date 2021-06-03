import React from 'react'
import classes from './FeaturedRooms.module.css'
import {useGlobalContext} from '../../context'
import Room from '../../Room/Room'


const FeaturedRooms=(props)=>{
    
    const {featuredRooms}= useGlobalContext()
    
    const featRoomsList= featuredRooms.map((featRoom)=>{
        return <Room name={featRoom.name} img={featRoom.img} price={featRoom.price} key={featRoom.id} id={featRoom.id}/>
    })
    
    return (
        <div className={classes.FeaturedRooms}>
            <h2>Featured Rooms</h2>
            <div className={classes.Underline}></div>
            <div className={classes.RoomsList}>
                {featRoomsList}
            </div>
        </div>
    )
}

export default FeaturedRooms