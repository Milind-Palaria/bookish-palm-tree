
const HeroSection = () => {
 

  return (
    <div className="h-[80vh] relative">

      <div className="h-full relative text-5xl top-[5vh]">
        <img src="hero-1.jpg" alt="Hero Image" className=" w-[35%] absolute left-[17vw] top-[5vh] rounded-lg" data-scroll data-scroll-speed="0.5" />
        <img src="hero-2.jpg" alt="Hero Image" className=" w-[35%] absolute left-[25vw] top-[15vh] rounded-lg" data-scroll data-scroll-speed="0.8" />
        <img src="hero-3.jpg" alt="Hero Image" className=" w-[35%] absolute left-[12vw] top-[20vh] rounded-lg" data-scroll data-scroll-speed="1.2" />
        <div className="absolute right-20 flex flex-col top-[23vh]">

        <h1 className="mt-0 opacity-60" data-scroll data-scroll-speed="0.7">Register</h1>
        <h1 className="mt-0 opacity-70"  data-scroll data-scroll-speed="0.9" >Login</h1>
        <h1 className=" mt-[-0.5rem] opacity-80"  data-scroll data-scroll-speed="1.1" >List</h1>
        <h1 className=" mt-[-1rem] opacity-90"  data-scroll data-scroll-speed="1.3" >View Order</h1>
        </div>
        <h1 className="absolute w-screen text-8xl bottom-0 m-auto text-center best-text">Bestsellers</h1>
        {/* <div className="absolute right-0 top-[20vh]"> 
          <h1 data-scroll data-scroll-speed="0.7">aslcamlsk</h1>
          <h1  data-scroll data-scroll-speed="0.8">aslcamlsk</h1>
          <h1 data-scroll data-scroll-speed="0.9">aslcamlsk</h1>
          <h1 data-scroll data-scroll-speed="1">aslcamlsk</h1>

        </div> */}

      </div>
    </div>
  )
}

export default HeroSection