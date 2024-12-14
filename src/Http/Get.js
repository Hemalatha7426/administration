import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from '@mui/material'
const Get = () => {

  const[num,setNum]=useState([])
  const[user,setUser]=useState('')
useEffect(() => {
   axios.get('https://jsonplaceholder.typicode.com/users/').then((res)=>{
console.log("This is object",res.data)
setNum(res.data)

})
}, [])
 
const handle=(e)=>{
  setUser(e.target.value)
}
const handlePost=()=>{
  try{
  if(user==="Hema"){
  axios.post('https://jsonplaceholder.typicode.com/users',{name:user}).then((res)=>{
    setNum([...num,res.data])
  })}
  else{
    throw new Error("Danger Code(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧")
  }}
  catch(error)
  {
      console.log(error.message)
  }
}
const handlePut=()=>{
  axios.put('https://jsonplaceholder.typicode.com/users/1',{name:user}).then((res)=>{
    setNum(res.data)
  })
}
const handleDelete=()=>{
  axios.delete('https://jsonplaceholder.typicode.com/users/1').then((res)=>{
  setNum(res.data)
  })
}
  return (
    <div>
      {
        num.map((value,index)=>(
<li key={index}>{value.name}</li>
 ))}
 <center>
     {/* {num.name}<br></br> */}
      <input type='text'  onChange={handle} placeholder='Enter the number' value={user}></input><br></br>
      <Button onClick={handlePost}>Post</Button>
      <Button onClick={handlePut}>Update</Button>
      <Button onClick={handleDelete}>Delete</Button>
      
</center>
     </div>
     
  )
}
export default Get