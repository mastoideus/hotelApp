import React from 'react'
import classes from './HeroSingleText.module.css'
import swanIcon from '../../../assets/images/Swan-icon.png'

const heroSingleText=(props)=>{
    return (
        <div className={classes.HeroText}>
           <h1>{props.name}</h1>
           <div className={classes.Underline}></div>
           <img src={swanIcon} alt='jgh'/>
        </div>
    )
}

export default heroSingleText