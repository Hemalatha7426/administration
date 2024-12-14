import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Assign1.css';

const Assign1 = () => {
  const [num, setNum] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => {
        console.log("Data fetched on mount:", res.data);
        setNum([res.data]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handlePost = () => {
    axios.post('https://jsonplaceholder.typicode.com/users', { name: user })
      .then((res) => {
        setNum([...num, res.data]);
        setUser(""); 
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  const handlePut = () => {
    axios.put('https://jsonplaceholder.typicode.com/users/1', { name: user })
      .then((res) => {
        setNum([res.data]);
        setUser("");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleDelete = () => {
    axios.delete('https://jsonplaceholder.typicode.com/users/1')
      .then(() => {
        setNum([]);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div className='x'>
      <center>
        <ul>
          {num.map((val, index) => (
            <li key={index}>{val.name}</li>
          ))}
        </ul>
        <input
          type='text'
          placeholder="Enter user name"
          value={user}
          onChange={handleChange}
        />
        <br />
        <button onClick={handlePost}>Post</button>
        <br />
        <button onClick={handlePut}>Put</button>
        <br />
        <button onClick={handleDelete}>Delete</button>
      </center>
    </div>
  );
};

export default Assign1;
