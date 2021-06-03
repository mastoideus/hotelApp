import React from 'react'
import classes from './HeroSingleRoom.module.css'
import HeroSingleText from './HeroSingleText/HeroSingleText'



const heroSingleRoom=(props)=>{
    return (
        <div className={classes.HeroSingle}>
          <HeroSingleText name={props.name}/>
        </div>
    )
}


export default heroSingleRoom