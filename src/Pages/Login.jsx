import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  return (
    <>
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label htmlFor="">Email</label>
        <input type="email" id="emailInput" className='loginInput' placeholder='Enter your Email...' />

        <label htmlFor="">Password</label>
        <input type="password" id="passwordInput" className='loginInput' placeholder='Enter your Password...' />

        <Link to="/" className="link loginButton">Login</Link>
      </form>
      <Link to="/register" className="link loginRegisterButton">Register</Link>

    </div>
    </>
  )
}

export default Login;
