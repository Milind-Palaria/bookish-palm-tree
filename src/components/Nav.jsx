import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=' p-6 bg-black text-yellow-400 flex justify-between'>
      <h1>Bookish</h1>
      <div className='flex gap-10'>
        
<NavLink to="/register">Register</NavLink>
<NavLink to="/login">login</NavLink>
<NavLink to="/book/list">List</NavLink>

      </div>
    </div>
  )
}

export default Nav