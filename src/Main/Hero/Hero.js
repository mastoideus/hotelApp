import React from 'react'
import classes from './Hero.module.css'
import HeroText from './HeroText/HeroText'



const hero=(props)=>{
    return (
        <div className={classes.Hero}>
         <HeroText/>
        </div>
    )
}

export default hero 