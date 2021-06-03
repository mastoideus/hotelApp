import React from 'react'
import classes from './ToggleBtn.module.css'
import toggleImg from '../../assets/images/wave.png'


const toggleBtn=(props)=>{
    return (
        <div className={classes.ToggleBtn}>
           <img src={toggleImg} alt='bnn' onClick={props.opened}/>
        </div>
    )
}

export default toggleBtn