import React from 'react'
import classes from './SelectElem.module.css'
import {MdArrowDropDownCircle} from 'react-icons/md'
import {useGlobalContext} from '../../../context'


const SelectElem=(props)=>{
    const {priceAndPersonsRooms}= useGlobalContext()
    
    return (
        <div className={classes.SelectElem}>
              <div className={classes.Select}>
                  <span className={classes.SelectText}>{props.name}</span>
                  <MdArrowDropDownCircle/>
              </div>
              <div className={classes.SelectList}>
                 {props.options.map((option,index)=>{
                     return <div key={option} onClick={()=>priceAndPersonsRooms(option)} className={classes.SelectItem}>{option}</div>
                 })}
              </div>

        </div>

    )
}

export default SelectElem