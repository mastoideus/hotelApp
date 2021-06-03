import React from 'react'
import rooms from '../data'
import HeroSingleRoom from './HeroSingleRoom/HeroSingleRoom'


const SingleRoomPage=(props)=>{
    
   
    const room= rooms.findIndex(room=>{
            return +props.match.params.id === room.id
    })
     

    const { name}= rooms[room]
    

    
    
    return(
        <div>
          <HeroSingleRoom name={name} />
        </div>
    )
}


export default SingleRoomPage