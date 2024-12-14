import React from 'react'

const ListItem1 = (props) => {
  return (
    <div>
        <h1>Order list</h1>
        <ol>
            {props.data1.map((list,index)=>(
                <li key={index}>{list}</li>
            ))}
        </ol>
        <h1>Unorder list</h1>
        <ul>
            {props.data2.map((list,index)=>(
                <li key={index}>{list}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListItem1



