import React from "react";
import { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async(e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
        const userData = {
          email : email,
          password : password
          
        };
        await axios
          .post("/users/login", userData)
          .then((res) => {
            console.log(res.data);
           toast("Logged In successfully");
          
           
          })
          .catch((err) => {
            
            toast(err.res.data)
          });
      }
    
  }
 
    
  

  return (
    <div
      style={{
        width: "30%",
        margin : "auto",
        padding: "20px",
        border : "none"
      }}
    >
      
      <div className="form" style={{ display: "block", padding: "24px" }}>
        <input
          style={{ width: "250px", margin: "10px", border: "none" , padding: "10px", borderRadius: "5px"}}
          type="text"
          placeholder="Enter your email"
          value={email} onChange ={(e) => {
            setEmail(e.target.value)
          }}
        />
        <br />
        <input
          style={{ width: "250px", margin: "10px", border: "none", padding: "10px", borderRadius: "5px" }}
          type="password"
          placeholder="Enter your password"
          value={password} onChange ={(e) => {
            setPassword(e.target.value)
          }}
        />
        <br />
        <button
          className="btn btn-outline"
          style={{
            width: "250px",
            margin: "10px",
            backgroundColor: "#AA9988",
            color: "white",
          }}
          onClick = {handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}