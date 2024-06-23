
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";
import { ScrollTrigger } from 'gsap/all'
import { useRef } from "react";
import CurrentBooks from "./CurrentBooks";
import LandingPage from "../components/LandingPage";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);
const Home2 = () => {

  const scrollRef = useRef();


  useGSAP(() => {
    gsap.to('.text-gsap', {
      y: 0,
      duration: 1,
      opacity: 1,
      delay: 2,
      ease: 'power1.in',
      stagger: {
        amount: 1,
      }
    })
  }, []);

  useGSAP(() => {
    gsap.to('.img-gsap', {
      duration: 2,
      opacity: 0.5,
      ease: 'power1.in',
      stagger: {
        amount: 1,
      }
    })
  }, []);
  useGSAP(() => {
    gsap.to('.text-gsap', {
      duration: 1,
      filter: 'blur(10px)',
      color: '#000',
      letterSpacing: '30px',
      scrollTrigger: {
        trigger: '.text-gsap',
        start: "+=1",
        scrub: 1
      },
      ease: 'power1.in',
      stagger: {
        amount: 1,
      }
    })
  }, [{ scope: scrollRef }]);
  useGSAP(() => {
    gsap.to('.img1-gsap', {
      duration: 10,
      width: "100%",
      filter: 'blur(10px)',
      scrollTrigger: {
        trigger: '.img-gsap',
        start: "+=1",
        markers: true,
        scrub: 1
      },
      ease: 'power1.in',
      stagger: {
        amount: 1,
      }
    })
  }, [{ scope: scrollRef }]);
  useGSAP(() => {
    gsap.to('.img2-gsap', {
      duration: 10,
      width: "100%",
      filter: 'blur(10px)',
      scrollTrigger: {
        trigger: '.img-gsap',
        start: "+=1",
        markers: true,
        scrub: 1
      },
      ease: 'power1.in',
      stagger: {
        amount: 1,
      }
    })
  }, [{ scope: scrollRef }]);
  useGSAP(() => {
    gsap.to('.img3-gsap', {
      duration: 10,
      width: "100%",
      filter: 'blur(10px)',
      scrollTrigger: {
        trigger: '.img-gsap',
        start: "+=1",
        markers: true,
        scrub: 1
      },
      ease: 'power1.in',
      stagger: {
        amount: 1,
      }
    })
  }, [{ scope: scrollRef }]);
  return (
    <div>
      <LandingPage/>
   
      <CurrentBooks />

    </div>
  )
}

export default Home2