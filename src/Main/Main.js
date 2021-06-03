import React from 'react'
import './Main.css'
import Hero from '../Main/Hero/Hero'
import Servis from './Servis/Servis'
import FeaturedRooms from './FeaturedRooms/FeaturedRooms'

const main=()=>{
    return (
        <div className='Main'>
          <Hero/>
          <Servis/>
          <FeaturedRooms/>
        </div>
    )
}

export default main 