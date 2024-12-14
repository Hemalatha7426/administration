import { Button } from '@mui/material'
import React from 'react'
import {useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
    const handleLog=()=>(
        navigate('/Home',{ state : {message: 'Hello from Hema!'}})
    )
  return (
    <div>
      <h1>Welcome to Login</h1>
      <Button onClick={handleLog}>Click Me</Button>
    </div>
  )
}

export default Login