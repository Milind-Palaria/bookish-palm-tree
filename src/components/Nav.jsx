import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assests/bookish-logo.png"
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";

gsap.registerPlugin(useGSAP);
 

const Nav = () => {
  
useGSAP(()=>{
  gsap.to('.nav-gsap',{
    duration:1,
    opacity:1,
    delay:4,
    ease:'power1.in',
    stagger:{
      amount:1,
    }
  })
},[]);

  return (
    <div className=' sticky bg-black w-full top-0 p-2 flex justify-center backdrop-blur-md text-white z-50'>
      {/* <NavLink to="/"><img src={logo} alt="logo" className=' w-24'/></NavLink> */}
      {/* <NavLink to="/">
        <div>
        <h1>bookish</h1>
        <h2>Palm tree</h2>
        </div>
        </NavLink> */}

      <div className='flex gap-20 w-1/2 justify-center text-center lobster-regular'>

        <NavLink to="/register" className='hover:tracking-widest duration-500  w-1/4 opacity-0 nav-gsap'>
        <h1 className='bg-white/80 text-[#000] hover:bg-white rounded-sm'>
          Register
          </h1>
        </NavLink>
        <NavLink to="/login"  className='hover:tracking-widest duration-500  w-1/4 opacity-0 nav-gsap' > <h1 className='bg-white/80 text-[#000] hover:bg-white rounded-sm'>
        Login
          </h1></NavLink>
        <NavLink to="/book/list"  className='hover:tracking-widest duration-500  w-1/4 opacity-0 nav-gsap' > <h1 className=' bg-white/80 text-[#000] hover:bg-white rounded-sm'>
          List
          </h1></NavLink>
        <NavLink to="/book/orders"  className='hover:tracking-widest duration-500  w-1/4 opacity-0 nav-gsap' > <h1 className='bg-white/80 text-[#000] hover:bg-white rounded-sm'>
          View Orders
          </h1></NavLink>
        {/* <NavLink to="/book/orders">View Order</NavLink> */}
        {/* <button onClick={logOutHandler}>Log Out</button> */}


      </div>
    </div>
  )
}

export default Nav