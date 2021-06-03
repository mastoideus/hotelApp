import React from 'react'
import classes from './Serv.module.css'


const serv=(props)=>{
    return (
        <div className={classes.Serv}>
           <p className={classes.Icon}>{props.icon}</p>
           <h4>{props.title}</h4>
           <p className={classes.Info}>{props.info}</p>
        </div>
    )
}

export default serv