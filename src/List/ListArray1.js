
// import React from 'react'
// import ListItem1 from './ListItem1';
// const ListArray1 = () => {
//     const arr=["Idly","Dosa","Boori"]
//     const arr1=["Idly","Dosa","Boori"];
//   return (
//     <div>
//       <center><h1>Hotel Menu Components</h1></center>
//       <ListItem1 data1={arr} data2={arr1}/>
      
//     </div>
//   )
// }

// export default ListArray1;
import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState("username");
  const [isUpdated, setIsUpdated] = useState(false);

  const handleUpdate = () => {
    setUsername("Hemalatha");
    setIsUpdated(true);
  };

  return (
    <div>
      <center>
      <h1>Welcome {username}</h1>
      <button onClick={handleUpdate}>UPDATE</button>
      </center>
    </div>
  );
}

export default App;
