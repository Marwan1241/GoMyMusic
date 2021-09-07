import React from 'react'
import "../css/Login.css";
import { loginUrl } from '../spotify';

function Login() {
    return (
        <div className="login">

<img src={process.env.PUBLIC_URL + '/logo.png'} alt="gomymusic" /> 
            
           <a href={loginUrl}>LOGIN USING SPOTIFY</a>
            
        </div>
    )
}

export default Login
