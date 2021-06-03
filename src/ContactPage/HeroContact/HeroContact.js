import React, {useState} from 'react'
import classes from './HeroContact.module.css'
import HeroContactText from './HeroContactText/HeroContactText'
import ContactModal from '../ContactModal/ContactModal'
import Backdrop from '../ContactModal/Backdrop/Backdrop'


const HeroContact=(props)=>{
    const [openForm, setOpenForm]= useState(false)
    
    
    const openContactHandler=()=>{
      setOpenForm(true)
    }
    const closeContactHandler=(e)=>{
      e.preventDefault()
      setOpenForm(false)
    }

    return (
        <div>
          <Backdrop show={openForm} closed={closeContactHandler}/>
          <ContactModal show={openForm} close={(event)=>closeContactHandler(event)}/>
          <div className={classes.HeroContact}>
          <HeroContactText opened={openContactHandler}/>
          </div>
        </div>
        
    )
}

export default HeroContact