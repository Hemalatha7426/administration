import React from 'react'
import {useState} from 'react'

function updateComponent(Original)
{
function NewComponents(props){
    const[money,setMoney]=useState(20);

     const handlePlus=()=>{ 
       setMoney(money*2)
}
return<Original money={money} handlePlus={handlePlus}{...props}/>
}
return NewComponents
}
export default updateComponent