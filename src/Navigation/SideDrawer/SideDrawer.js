import React from 'react'
import classes from './SideDrawer.module.css'


const sideDrawer= (props)=>{
    
    return (
        <div className={classes.SideDrawer} style={{transform: props.open? 'translateY(0)':'translateY(-80px)'}}>
          {!props.open? null: 
             <div>
             <h3>Black Swan Hotel</h3>
             <ul >
               <li><a href='/'>Home</a></li>
               <li><a href='/rooms'>Rooms</a></li>
               <li><a href='/contact'>Contact</a></li>
           </ul>
           </div>}
        </div>
    )
}

export default sideDrawer