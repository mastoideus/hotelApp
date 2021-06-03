import React, {useState,useContext,useEffect} from 'react'
import rooms from './data'


const AppContext= React.createContext()

export const AppProvider= ({children})=>{
  const [allRooms, setAllRooms]=useState(rooms)
  const [featuredRooms,setFeaturedRooms]=useState([])
    

 useEffect(()=>{
   const featuredR= rooms.filter(room=>{
       return room.featured=== true
   })
   setFeaturedRooms(featuredR)
 },[])

  
 /*funkcija za pretraživanje soba po kategoriji cijene i broja osoba  */
 
 const priceAndPersonsRooms= (Category)=>{
    if(Category==='Cheap') { 
    const newRooms= rooms.filter(room=>{
          return room.price < 280 
      })
      setAllRooms(newRooms)
    }
    if(Category==='Expensive'){
        const expensiveRooms=rooms.filter(room=>{
            return room.price >300 && room.price <400
        })
       setAllRooms(expensiveRooms)
    }
    if(Category==='Luxurious'){
        const luxRooms= rooms.filter(room=>{
            return room.price>400
        })
        setAllRooms(luxRooms)
    }
    if(Category==='1 Person'){
        const onePerson=rooms.filter(room=>{
            return room.persons===Category
        })
        setAllRooms(onePerson)
    } else if (Category==='2 Persons'){
        const twoPersons=rooms.filter(room=>{
            return room.persons===Category
        })
        setAllRooms(twoPersons)
    } else if (Category==='3-5 Persons'){
        const morePersons=rooms.filter(room=>{
            return room.persons===Category
        })
        setAllRooms(morePersons)
    }
  }

  /* funkcija za prikaz  svih soba  */
  const allR= ()=>{
      setAllRooms(rooms)
  }

return <AppContext.Provider value={{
   featuredRooms, allRooms, priceAndPersonsRooms, allR
    }}>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext= ()=>{
    return useContext(AppContext)
}