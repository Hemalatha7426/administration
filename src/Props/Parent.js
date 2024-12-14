import React from 'react'
import Child from './Child';
const Parent = () => {
    var Property = "House"
  return (
    <div>
      <h1>This is parent!</h1>
      <h1>My property is : {Property}</h1>
      <Child papers = {Property }/>
    </div>
  )
}

export default Parent
