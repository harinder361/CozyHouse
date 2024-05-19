import { Link } from 'react-router-dom';
import {Context} from '../context/Context'
import {useContext, useRef} from 'react'
import axios from 'axios';
import './Login.css'

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const {user, dispatch, isFetching } = useContext(Context);


  const handleSubmit = async (e)=> {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type: "LOGIN_SUCCESS", payload:res.data})
      window.location.replace("/");
    }catch(err){
      console.log(err);
      dispatch({type:"LOGIN_FAILURE"})
    }
  }

  console.log(user);

  return (
    <>
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input type="text" id="usernameInput" className='loginInput' placeholder='Enter your Email...' ref={userRef} />

        <label htmlFor="">Password</label>
        <input type="password" id="passwordInput" className='loginInput' placeholder='Enter your Password...' ref={passwordRef} />

        <button className="link loginButton"type='submit' disabled={isFetching}>Login</button>
      </form>
      <Link to="/register" className="link loginRegisterButton">Register</Link>

    </div>
    </>
  )
}

export default Login;
