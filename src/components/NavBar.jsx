import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const NavBar = () => {
  return (
    <div className="w-full h-[6%] flex gap-4 justify-center items-center bg-gray-800 text-white">
      <NavLink to='/' className={({isActive})=> isActive?"active": "inActive"}>Home</NavLink>
      <NavLink to='/pastes' className={({isActive})=> isActive?"active": "inActive"}>Paste</NavLink>
    </div>
  )
}

export default NavBar
