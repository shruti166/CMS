import React from 'react';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register'
import './App.css';
import Profile from './components/Profile';
import Create from './components/Create';
import Home from './components/Home';
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <>
    <ToastContainer/>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/login" element = {<Login/>}>LOGIN</Route>
        <Route path = "/register" element = {<Register/>}>LOGIN</Route>
        <Route path = "/profile" element = {<Profile/>}>Profile</Route>
        <Route path = "/create" element = {<Create />}>Profile</Route>
        <Route path = "/" element = {<Home/>}>Home</Route>
        
      </Routes>
    </div>
    </>
  );
}

export default App;
