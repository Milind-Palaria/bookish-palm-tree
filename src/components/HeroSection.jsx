
const HeroSection = () => {
  return (
    <div className="h-screen">
      <div className=" h-full relative flex flex-col items-center justify-center text-5xl">
        <img src="hero-1.jpg" alt="Hero Image" className=" w-[35%] absolute left-[14vw] top-[5vh]"  data-scroll data-scroll-speed="0.4"/>
        <img src="hero-2.jpg" alt="Hero Image" className=" w-[35%] absolute left-[20vw] top-[15vh]"  data-scroll data-scroll-speed="0.7"/>
        <img src="hero-3.jpg" alt="Hero Image" className=" w-[35%] absolute left-[8vw] top-[20vh]"  data-scroll data-scroll-speed="1"/>
         <h1 className="absolute right-[10vw] top-[60vh]"  data-scroll data-scroll-speed="0.7">Register</h1>
        <h1 className="absolute right-[10vw] top-[10vh]"  data-scroll data-scroll-speed="0.8" >Login</h1>
        <h1 className="absolute right-[10vw] top-[20vh]"  data-scroll data-scroll-speed="0.9" >List</h1>
        <h1 className="absolute right-[10vw] top-[30vh]" data-scroll data-scroll-speed="1" >View Order</h1>

{/* 
      <h1 className="my-4" data-scroll data-scroll-speed="0.4">Hero Section</h1>
      <h1  className="my-4" data-scroll data-scroll-speed="0.6">second</h1>
      <h1  className="my-4" data-scroll data-scroll-speed="1">Third</h1> */}
      </div>
    </div>
  )
}

export default HeroSection