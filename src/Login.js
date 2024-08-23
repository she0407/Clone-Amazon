import React , { useState } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
   
    return (
        <div className="login">
            <Link to="/">
                <img
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"></img>
            </Link>
            <div className="login__container">
                <h1 >Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input  type="email"></input>
                    <h5>Password</h5>
                    <input   type="password"></input>
                    <button  type="submit" className="login__signin">Sign In</button>
                    <button  className="login__register">Create Your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
