
import { Button } from '@mui/material';
import React, { useState } from 'react'

const Register = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');

  const [usererror,setuserError]=useState(false)
  const [emailerror,setemailError]=useState(false)
  const [passerror,setpassError]=useState(false)

  const handleUser=(e)=>{
    setUser(e.target.value)
  }
  
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  
  const handlePass=(e)=>{
    setPass(e.target.value)
  }
  const handleSubmit=()=>{
    setuserError(false)
    setemailError(false)
    setpassError(false)

    if(user===""&&email===""&&pass==="")
    {
      alert("!...Form is empty...!")
    }
    else if(user.length<6)
    {
      setuserError(true)
    }
    else if(!emailRegex.test(email))
    {
      setemailError(true)
    }
    else if(pass.length<8)
    {
      setpassError(true)
    }
    else{
      alert(`${user} ${email} ${pass}` )
    }
  }
  return (
    <center>
    <div>
      <h1>REGISTER FORM</h1>
         <label>Name:</label>
          <input type="text" onChange={handleUser} value={user} name="name" placeholder="Name" required></input><br></br><br></br>
         {usererror &&<p>User name should be 6 characters❌</p>}
         <label> Email:</label>
         <input type="email"  onChange={handleEmail} value={email} name="email" placeholder="Email" required></input><br></br><br></br>
         {emailerror &&<p style={{color:"red"}}>Email is Invalid❌</p>}
         <label>Password:</label>
         <input type="password"  onChange={handlePass} value={pass} name="password" placeholder="Password" required></input><br></br><br></br>
         {passerror &&<p style={{color:"red"}}>Password should be 8 characters❌</p>}
        <Button onClick={handleSubmit}>Register</Button>
    </div>
    </center>
  )
}
export default Register