import React, { useeffect, useState } from 'react'
import { useEffect } from 'react'
const Useeffect = () => {
  const[name,setName]=useState(0)

    useEffect(() => {
      console.log("Mounting >>>>>>>>>>>>>>....")
    }, [])
    useEffect(() => {
      console.log("updating  >>>>>>>>>>>>>>")
    }, [name])
    useEffect(() => {
      console.log("Will unMounting>>>>>>>>>>>>>>")
    }, [])
    const handleUp=()=>{
      setName(name+1)
    }
  
  return (
    <div>
      <button onClick={handleUp}>Submit</button>
    </div>
  )
}

export default Useeffect








































