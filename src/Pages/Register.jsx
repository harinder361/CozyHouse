import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
  return (
    <div className='register'>
      <span className="registerTitle">Register </span>
      <form action="" className="registerForm">
        <label htmlFor="">Username</label>
        <input type="text" className='registerInput' placeholder='Enter your Username...' />

        <label htmlFor="">Email</label>
        <input type="email" className='registerInput' placeholder='Enter your Email...' />

        <label htmlFor="">Password</label>
        <input type="password" className='registerInput' placeholder='Enter your Password...' />

        <Link to="/login" className="link registerButton">Register</Link>
      </form>
      <Link to="/login" className="link registerLoginButton">Login</Link>

    </div>
  )
}

export default Register;
