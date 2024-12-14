import { colors } from "@mui/material";
import React, { useState } from "react";
function Lab() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count+1)
  }
    if (count == 5) {
      throw new Error("Count has reached its maximum value!")
    }
   

  return (
    <center>
    <div>
      <h1>Count: {count}</h1>
     
      <button onClick={handleIncrement} style={{ backgroundColor: 'black', color: 'white'}}>Count</button>
    </div>
    </center>
  );
}

export default Lab;
