import React from 'react'
import student from './student';

const college = () => {
    var name = "Hema"
    var regno="7273TUIT052"
    var section="A"

  return (
    <div>
  
      <h1>Name: {name}</h1>
      <h1>regno: {regno}</h1>
      <h1>Section: {section}</h1>

      <student data = {name }/>
      <student data = {regno}/>
    </div>
  )
}

export default college
