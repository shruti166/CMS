import React from 'react';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register'
import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/login" element = {<Login/>}>LOGIN</Route>
        <Route path = "/register" element = {<Register/>}>LOGIN</Route>
        <Route path = "/profile" element = {<Profile/>}>Profile</Route>
      </Routes>
    </div>
  );
}

export default App;
