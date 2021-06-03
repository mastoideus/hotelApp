import React from 'react'
import Auxili from '../hoc/Auxili'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout=(props)=>{
    return (
        <Auxili>
             <Toolbar/>
             <main>{props.children}</main>
        </Auxili>
        
    )
}


export default layout