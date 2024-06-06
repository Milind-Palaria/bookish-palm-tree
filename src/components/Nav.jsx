import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assests/bookish-logo.png"

const Nav = () => {
  return (
    <div className=' sticky bg-black w-full top-0 p-2 flex justify-center backdrop-blur-md text-white'>
      {/* <NavLink to="/"><img src={logo} alt="logo" className=' w-24'/></NavLink> */}
      {/* <NavLink to="/">
        <div>
        <h1>bookish</h1>
        <h2>Palm tree</h2>
        </div>
        </NavLink> */}

      <div className='flex gap-20 underline w-1/2 justify-center text-center '>

        <NavLink to="/register" className='hover:tracking-widest duration-300 w-1/4'>Register</NavLink>
        <NavLink to="/login"  className='hover:tracking-widest duration-300  w-1/4' >login</NavLink>
        <NavLink to="/book/list"  className='hover:tracking-widest duration-300  w-1/4' >List</NavLink>
        <NavLink to="/book/orders"  className='hover:tracking-widest duration-300  w-1/4' >View Order</NavLink>
        {/* <NavLink to="/book/orders">View Order</NavLink> */}
        {/* <button onClick={logOutHandler}>Log Out</button> */}


      </div>
    </div>
  )
}

export default Nav