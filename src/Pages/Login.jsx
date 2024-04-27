import './Login.css'

const Login = () => {
  return (
    <div className='login'>
      <span className="loginTitle">Login </span>
      <form action="" className="loginForm">
        <label htmlFor="">Email</label>
        <input type="email" className='loginInput' placeholder='Enter your Email...' />

        <label htmlFor="">Password</label>
        <input type="password" className='loginInput' placeholder='Enter your Password...' />

        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>

    </div>
  )
}

export default Login;
