import React from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Nav: React.FC = () => {

  useGSAP(() => {
    gsap.to('.nav-gsap', {
      duration: 1,
      opacity: 1,
      delay: 4,
      ease: 'power1.in',
      stagger: {
        amount: 1,
      },
    });
  }, []);

  return (
    <div className='bg-black w-full top-0 p-2 flex justify-center backdrop-blur-md text-white z-50'>
      <div className='flex gap-20 w-1/2 justify-center text-center lobster-regular'>
        <NavLink to="/register" className='hover:tracking-widest duration-500 w-1/4 opacity-0 nav-gsap'>
          <h1 className='bg-white/80 text-[#000] hover:bg-white rounded-sm'>
            Register
          </h1>
        </NavLink>
        <NavLink to="/login" className='hover:tracking-widest duration-500 w-1/4 opacity-0 nav-gsap'>
          <h1 className='bg-white/80 text-[#000] hover:bg-white rounded-sm'>
            Login
          </h1>
        </NavLink>
        <NavLink to="/book/list" className='hover:tracking-widest duration-500 w-1/4 opacity-0 nav-gsap'>
          <h1 className='bg-white/80 text-[#000] hover:bg-white rounded-sm'>
            List
          </h1>
        </NavLink>
        <NavLink to="/book/orders" className='hover:tracking-widest duration-500 w-1/4 opacity-0 nav-gsap'>
          <h1 className='bg-white/80 text-[#000] hover:bg-white rounded-sm'>
            View Orders
          </h1>
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
