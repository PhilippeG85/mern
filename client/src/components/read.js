import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Read() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/users')
      .then(res => setUser(res.data.data))
  }, [])

  const handleClick = (id) => {
    axios.delete(`http://localhost:8080/users/delete-user/${id}`)
      .then(res => console.log(res))
  }

  const displayUser = () => {
    return user.map((us, index) => {
      return (
        <div key={index}>
          <p>{us.email}</p>
          <button>
            <Link to={`/update/${us._id}`}>Update</Link>
          </button>
          <button onClick={() => handleClick(us._id)}>Delete</button>
        </div>
      )
    })
  };
 
  return (
    <div>
      <h1>Hello from Read</h1>
      { user.length === 0 ? "true" : displayUser() }
    </div>
  );
}

export default Read;
