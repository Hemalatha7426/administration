import React from 'react'
import { useState } from 'react'
import updateComponent from './Person3';
function Person2({money,handlePlus}) {
  return (
    <div>
        <center>
        <h1 style={{color:'green'}}>This Number is {money} </h1>
        <button onClick={handlePlus}>submit</button>
        </center>
        </div>
  )
}
export default updateComponent(Person2);

