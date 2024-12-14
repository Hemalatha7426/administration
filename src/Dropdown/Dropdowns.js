import React,{useState} from 'react'

const Dropdowns = () => {
    const[select,setSelect]=useState(' ')
    const options=[
        {value:"",label:"Select the value"},
        {value:"Python",label:"Python"},
        {value:"Java",label:" Java"},
        {value:"React",label:"React"}

    ]
    const handleChange=(e)=>{
        setSelect(e.target.value)
    }
  return (
    <center>
    <div>

<select value={select} onChange={handleChange}>
{options.map((value,index)=>(
    <option key={index} value={value.value}>{value.label}</option>
))}
</select>
{select &&<h4>Selected Value: {select}</h4>}
    </div>
    </center>
  )
}

export default Dropdowns















