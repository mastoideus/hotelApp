import React from 'react'
import classes from './Room.module.css'
import {NavLink} from 'react-router-dom'


const room=(props)=>{
    return (
        <div className={classes.Room} >
           <div className={classes.Img}>
          <NavLink to={'/'+ props.id}><img src={props.img} alt='ttz'/></NavLink>
           </div>
          <footer>
          <h3>{props.name}</h3>
          </footer>
           <div className={classes.Price} >
          <small>${props.price}</small>
          <small>per Night</small>
          </div>
        </div>
    )
}

export default room 