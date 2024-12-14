import React from 'react'

const Dropdown = () => {
  return (
    <center>
    <div>
        <select name="gender" required>
                
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
    </div>
    </center>
  )
}

export default Dropdown