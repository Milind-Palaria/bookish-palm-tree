import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HeroSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to('.best-text', {
      duration: 2,
      opacity: 1,
      scale: 1.5,
      scrollTrigger: {
        trigger: '.helll',
        start: 'top 14%',
        end: 'bottom 40%',
        scrub: 1,
      },
      ease: 'power1.in',
    });
  }, [{ scope: scrollRef }]);

  return (
    <div className="h-[80vh] relative helll">
      <div className="h-full relative text-5xl top-[5vh]">
        <img src="hero-1.jpg" alt="Hero Image" className="w-[35%] absolute left-[17vw] top-[5vh] rounded-lg z-10" data-scroll data-scroll-speed="0.5" />
        <img src="hero-2.jpg" alt="Hero Image" className="w-[35%] absolute left-[25vw] top-[15vh] rounded-lg z-10" data-scroll data-scroll-speed="0.8" />
        <img src="hero-3.jpg" alt="Hero Image" className="w-[35%] absolute left-[12vw] top-[20vh] rounded-lg z-10" data-scroll data-scroll-speed="1.2" />
        <div className="absolute right-20 flex flex-col top-[23vh] heass">
         <Link to="/register">
          <h1 className="mt-0 opacity-60" data-scroll data-scroll-speed="0.7">
            Register
          </h1>
         </Link>
         <Link to="/login">
          <h1 className="mt-0 opacity-70" data-scroll data-scroll-speed="0.9">
            Login
          </h1>
         </Link>
         <Link to="/book/list">
          <h1 className="mt-[-0.5rem] opacity-80" data-scroll data-scroll-speed="1.1">
            List
          </h1>
         </Link>
         <Link to="/book/orders">
          <h1 className="mt-[-1rem] opacity-90" data-scroll data-scroll-speed="1.3">
            View Order
          </h1>
         </Link>
        </div>
        <h1 className="absolute w-screen text-8xl bottom-0 m-auto text-center best-text opacity-0 z-0 translate-y-[-2rem]">Bestsellers</h1>
      </div>
    </div>
  );
}

export default HeroSection;
