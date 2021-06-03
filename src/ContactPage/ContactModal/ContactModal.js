import React from 'react'
import classes from './ContactModal.module.css'


const contactModal=(props)=>{
    return (
        <div className={classes.ContactModal} style={{opacity:props.show ? '1':'0', visibility:props.show ? 'visible':'hidden'}}>
           <div className={classes.Head}>
               <h2 className={classes.Title}>Contact form</h2>
           </div>
           <form className={classes.Form}>
               <label>Name:</label>
               <input type='text' placeholder='Your Name'/>
               <label>Email:</label>
               <input type='email' placeholder='Your Email'/>
               <label>Text:</label>
               <textarea></textarea>
               <div>
                 <button>Send</button>
                 <button onClick={props.close}>Cancel</button>
               </div>
           </form>
        </div>
    )
}

export default contactModal