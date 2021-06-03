import React from 'react'
import logoImg from '../../assets/images/Swan-icon.png'
import classes from './Logo.module.css'


const logo= (props)=>{
    return (
        <div className={classes.Logo}>
          <img src={logoImg} alt='hh'/>
          <h3>Black Swan Hotel</h3>
        </div>
    )
}

export default logo