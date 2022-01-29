import { useState, useEffect } from "react";
import Fish from './Fish'

const FishList = () => {

  const [fish, setFish] = useState([])

  useEffect(()=>{
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then(r=>r.json())
    .then(data=>{
      setFish(data)
      console.log(data)
    })
    .catch((err) => console.log(err))
  }, [])


  return ( 
    <div>
      In FishList
      {fish && <Fish fish={fish}/>}
      </div>
   );
}
 
export default FishList;