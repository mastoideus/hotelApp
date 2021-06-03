import React from 'react'
import HeroRooms from './HeroRooms/HeroRooms'
import Room from '../Room/Room'
import {useGlobalContext} from '../context'
import classes from './RoomsPage.module.css'
import SearchBar from './SearchBar/SearchBar'




const RoomsPage=(props)=>{
    const {allRooms}= useGlobalContext()
    
    const roomsList= allRooms.map(room=>{
        return  <Room img={room.img} name={room.name} price={room.price} id={room.id} key={room.id} />
       
    })
    
    return (
        <div>
            <HeroRooms/>
            <h1 className={classes.Search}>Search Rooms</h1>
            <div className={classes.Underline}></div>
            <SearchBar/>
            <div className={classes.RoomsList}>
               {roomsList}
            </div>
        </div>
    )
}


export default RoomsPage 