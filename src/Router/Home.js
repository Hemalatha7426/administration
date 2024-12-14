
import React from 'react'
import { Link,useLocation, useParams } from 'react-router-dom'

const Home = () => {
    const{id}=useParams();

    const location=useLocation();
    console.log(location.state)
    
  return (

                    <div>
                       <h1>Welcome Home </h1> 
                       <p>location.state</p>
                       <Link to='/'>Reg</Link>
                       </div>
                         
  )
}

export default Home