import React from 'react'
import classes from './SearchBar.module.css'
import SelectElem from './SelectElem/SelectElem'
import {useGlobalContext} from '../../context'

const SearchBar=(props)=>{
    const {allR}= useGlobalContext()

    
   
    

    const searchData= [
        {name:'Select Price Category', options: ['Cheap','Expensive','Luxurious']}, 
        {name:'Number of Persons', options: ['1 Person','2 Persons','3-5 Persons']},
        
    ]
    
    return (
       <div className={classes.SearchBar}>
         
         {searchData.map((search,index)=>{
             return <SelectElem key={search.name} name={search.name} options={search.options}/>
         
         })}
         <h3 className={classes.AllRooms} onClick={allR}>All Rooms</h3>
       </div>
    )
}

export default SearchBar