import React from 'react'
import classes from './NavigationItems.module.css'
import {NavLink} from 'react-router-dom'


const navigationItems=(props)=>{
    return (
        <ul className={classes.NavigationItems}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/rooms'>Rooms</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
    )
}

export default navigationItems