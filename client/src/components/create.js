import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/users/add-user', {
      email,
      password
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }
  return (
    <div>
      <h1>Hello from create</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={email} type="text" name="email" placeholder="email" />
        <br />
        <input onChange={handleChange} type="password" value={password} name="password" placeholder="Password" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Create;
