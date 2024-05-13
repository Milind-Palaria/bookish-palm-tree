import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=' p-6 px-[5rem] bg-black text-yellow-400 flex justify-between'>
<NavLink to="/">Bookish</NavLink>
      <div className='flex gap-10'>
        
<NavLink to="/register">Register</NavLink>
<NavLink to="/login">login</NavLink>
<NavLink to="/book/list">List</NavLink>

      </div>
    </div>
  )
}

export default Nav