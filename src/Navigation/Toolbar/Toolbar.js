import React, {useState} from 'react'
import classes from './Toolbar.module.css'
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import ToggleBtn from '../ToggleBtn/ToggleBtn'
import SideDrawer from '../SideDrawer/SideDrawer'


const Toolbar= (props)=>{
    const [openSideDrawer, setOpenSideDrawer]= useState(false)
    
    
   const openSideDrawerHandler=()=>{
       const currentValue= openSideDrawer
      setOpenSideDrawer(!currentValue)
   }

    return (
        <div className={classes.Toolbar}>
           <SideDrawer open={openSideDrawer}/>
           <Logo/>
           <nav>
               <NavigationItems/>
           </nav>
           <ToggleBtn opened={openSideDrawerHandler}/>
        </div>
    )
}

export default Toolbar