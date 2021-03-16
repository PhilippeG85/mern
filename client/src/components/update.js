import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const { id } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    axios.get(`http://localhost:8080/users/update/${id}`)
      .then(res => setEmail(res.data.email))
      .catch(err => console.log(err))
  }, []);

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/users/update/${id}`, {
      email,
      password
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  };

  return (
    <div>
      <h1>Hello from Update</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='email' value={email} onChange={handleChange} />
        <input type='password' value={password} onChange={handleChange} />
        <input type='submit' />
      </form>
    </div>
 
  );
}

export default Update;
