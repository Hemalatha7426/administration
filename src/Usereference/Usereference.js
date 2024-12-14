import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const Usereference = () => {
    const Reff=useRef()

    useEffect(() => {
      Reff.current.focus()
    }, [])

  return (
    <div>
        <input type="text" ref={Reff} name="name" placeholder="Name" required></input>
        
    </div>
  )
}

export default Usereference