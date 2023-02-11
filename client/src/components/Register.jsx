import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
        const userData = {
          name: name,
          email : email,
          password : password
          
        };
        await axios
          .post("/users/register", userData)
          .then((res) => {
            console.log(res.data);
            toast("user is Registered");
           
           
          })
          .catch((err) => {
            console.log(err);
          });
      }
    
  }
  return (
    <div
     
    >
      
      <div className="form" style={{ display: "block", padding: "24px",   alignItems: "center", width: "30%",
        margin: "auto", }}>
        <input
          style={{ width: "250px", margin: "10px", border: "none" , padding: "10px", borderRadius: "5px"}}
          type="text"
          placeholder="Enter your name"
          value={name} onChange ={(e) => {
            setName(e.target.value)
          }}
        />
        <br />
        <input
          style={{ width: "250px", margin: "10px", border: "none" , padding: "10px", borderRadius: "5px" }}
          type="email"
          placeholder="Enter your email"
          value={email} onChange ={(e) => {
            setEmail(e.target.value)
          }}
        />
        <br />
        <input
          style={{width: "250px", margin: "10px", border: "none" , padding: "10px", borderRadius: "5px" }}
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
            width: "250px", margin: "10px", border: "none" , padding: "10px", borderRadius: "5px", backgroundColor: "#AA9988"
            
          }}
          onClick = {handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}