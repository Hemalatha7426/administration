import React from 'react'

const Child = (props) => {
  return (
    <div>
      <h1>This is Child!</h1>
      <h1>My parent property is : {props.papers}</h1>
    </div>
  )
}

export default Child
