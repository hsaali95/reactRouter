import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    
  return (
      <>
      {/* css property do not apply on link */}
      {/* using link  */}
      {/* <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li> 
      </ul> */}

      {/* using of NavLink,css property can apply on it */}
      <ul>
          <li><NavLink to="/" style={({isActive})=>{return{backgroundColor: isActive ? 'lightblue' :''}}}>Home</NavLink></li>
          <li><NavLink to="/contact" style={({isActive})=>{return{backgroundColor: isActive ? 'lightblue' :''}}}>Contact</NavLink></li>
          <li><NavLink to="/help" style={({isActive})=>{return{backgroundColor: isActive ? 'lightblue' :''}}}>Help</NavLink></li>
      </ul>
      </>
  )
}
export default Navbar
