import { Link } from 'react-router-dom';
import './Register.css'
import { useState } from 'react';
import axios from 'axios';

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleOnSubmit = async (e)=>{
    e.preventDefault();
    setErr(false);
    try{
      const res = await axios.post("/api/auth/register", {
        username,
        email, 
        password
      })
      console.log(res.data);
      res.data && window.location.replace("/login");
    }catch(err){
      console.log(err);
      setErr(true);
    }
  }

  return (
    <div className='register'>
      <span className="registerTitle">Register </span>
      <form action="" className="registerForm" onSubmit={handleOnSubmit}>
        <label htmlFor="">Username</label>
        <input type="text" className='registerInput' placeholder='Enter your Username...' onChange={e=>{setUsername(e.target.value)}}/>

        <label htmlFor="">Email</label>
        <input type="email" className='registerInput' placeholder='Enter your Email...' onChange={e=>{setEmail(e.target.value)}} />

        <label htmlFor="">Password</label>
        <input type="password" className='registerInput' placeholder='Enter your Password...' onChange={e=>{setPassword(e.target.value)}} />

        <button className="link registerButton" type='submit'>Register</button>
      </form>
      <button><Link to="/login" className="link registerLoginButton">Login</Link></button>
      {err && <h3><b>Something went Wrong...</b></h3>}

    </div>
  )
}

export default Register;
