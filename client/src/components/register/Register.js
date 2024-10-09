import React from 'react'
import './Register.css';
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form className='registerForm'>
      <label>Username</label>
        <input type="text" className="registerInput" placeholder='enter your username...'/>
        <label>Email</label>
        <input type="text" className="registerInput" placeholder='enter your email...'/>
        <label>Password</label>
        <input type="password" className="registerInput" placeholder='enter your password...'/>  
        <button className='registerButton'>Register</button>     
      </form>
      <button className='registerLoginButton'><Link className="link" to="/Login">Login</Link></button>
    </div>
  )
}