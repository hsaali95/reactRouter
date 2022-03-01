import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx"
import Contact from "./pages/Contact.jsx"
import Navbar from "./components/Navbar.jsx"
import Help from "./pages/Help.jsx"
function App() {
  return (
   <>
   <Navbar />
  <Routes>
    {/* <Route path='/' element = {<h1>hello world</h1>}/>    */}
    {/* agar kese page ko home par rakhna hoto usko index dedo ya path ='/' */}
    <Route index element = {<Home />}/>   
    <Route path='/contact' element = {<Contact />}/>  
    <Route path='/help' element = {<Help />}/>   
    {/* if there is no route we use * in path for  showing error  */}
    <Route path='*' element = {<h1>404 page not found</h1>}/>   
  </Routes>
   </>
  );
}

export default App;
