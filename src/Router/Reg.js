import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Reg = () => {
    const navigate=useNavigate();
    const handleReg=()=>(
        navigate('/Login')
    )
  return (
    <div>
      <h1>Welcome to Registration</h1>
      <Button onClick={handleReg}>Click Me</Button>
    </div>
  )
}

export default Reg