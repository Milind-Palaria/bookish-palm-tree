import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assests/bookish-logo.png"

const Nav = () => {
  return (
    <div className='fixed w-full top-0 px-[5rem] flex justify-center backdrop-blur-md bg-white/0 text-white'>
      {/* <NavLink to="/"><img src={logo} alt="logo" className=' w-24'/></NavLink> */}
      {/* <NavLink to="/">
        <div>
        <h1>bookish</h1>
        <h2>Palm tree</h2>
        </div>
        </NavLink> */}

      <div className='flex gap-10'>

        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/book/list">List</NavLink>
        <NavLink to="/book/orders">View Order</NavLink>
        {/* <NavLink to="/book/orders">View Order</NavLink> */}
        {/* <button onClick={logOutHandler}>Log Out</button> */}


      </div>
    </div>
  )
}

export default Nav