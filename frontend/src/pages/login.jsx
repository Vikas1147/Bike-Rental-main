// pages/Login.js
import React from 'react';
import { Link} from 'react-router-dom';
import { Button } from "../components/button"
import { InputBox } from "../components/InputBox";
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import './login.css';
import axios from "axios";

function Login() {

  const [firstname,setfirstname]=useState("");
  const [password,setpassword]=useState("");
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h2>Login</h2>
      
       <InputBox onChange={e => {
          setfirstname(e.target.value);}} placeholder="email.com" label={"email"}/> 
         
       <InputBox onChange={e => {
          setpassword(e.target.value);}} placeholder="123456" label={"Password"} />
        
        <Button onClick={async () => {
     
            const response=await axios.post("http://localhost:3000/api/v1/user/signin", {
              username:firstname,
              password
                   })
                   localStorage.setItem("token",response.data.token)
            navigate("/station")
                  }}label={"Sign up"}  />
    
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  
  );
}

export default Login;