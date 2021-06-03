import React from 'react'
import classes from './Servis.module.css'
import{FaShuttleVan,FaSwimmingPool,FaHiking,FaUmbrellaBeach} from 'react-icons/fa'
import Serv from './Serv/Serv'


const servis= (props)=>{
    
    const servisi= [
        {title:'Free Shuttle',icon:<FaShuttleVan/>, info:'Svaka lajna delikatna ko ukus dagnja i vina'},
        {title:'Endless Hiking',icon:<FaHiking/>, info:'Svaka lajna markantna ko vilica Tarantina'},
        {title:'Private Beach',icon:<FaUmbrellaBeach/>, info:'Galantna ko dalmatinka dok sluša otpor stina'},
        {title:'Swimmingpools',icon:<FaSwimmingPool/>, info:'Fatalna ko Nadalina za čopor muškardina'},
    ]

    const servisiList= servisi.map(servis=>{
        return <Serv key={servis.title} title={servis.title} info={servis.info} icon={servis.icon}/>
    })
    
    return (
        <div className={classes.Servis}>
           <h2>Services</h2>
           <div className={classes.Underline}></div>
           <div className={classes.List}>
            {servisiList}
           </div>
        </div>
    )
}


export default servis 