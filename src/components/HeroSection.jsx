
const HeroSection = () => {
  return (
    <div className="h-[80vh] relative">

      <div className="h-full relative text-5xl top-[5vh]">
        <img src="hero-1.jpg" alt="Hero Image" className=" w-[35%] absolute left-[14vw] top-[5vh] rounded-lg" data-scroll data-scroll-speed="0.5" />
        <img src="hero-2.jpg" alt="Hero Image" className=" w-[35%] absolute left-[20vw] top-[15vh] rounded-lg" data-scroll data-scroll-speed="0.8" />
        <img src="hero-3.jpg" alt="Hero Image" className=" w-[35%] absolute left-[8vw] top-[20vh] rounded-lg" data-scroll data-scroll-speed="1.2" />
        <div className="absolute right-0 flex flex-col top-[23vh]">

        <h1 className="mt-0" data-scroll data-scroll-speed="0.7">Register</h1>
        <h1 className="mt-0"  data-scroll data-scroll-speed="0.9" >Login</h1>
        <h1 className=" mt-[-0.5rem]"  data-scroll data-scroll-speed="1.1" >List</h1>
        <h1 className=" mt-[-1rem]"  data-scroll data-scroll-speed="1.3" >View Order</h1>
        </div>
        {/* <div className="absolute right-0 top-[20vh]"> 
          <h1 data-scroll data-scroll-speed="0.7">aslcamlsk</h1>
          <h1  data-scroll data-scroll-speed="0.8">aslcamlsk</h1>
          <h1 data-scroll data-scroll-speed="0.9">aslcamlsk</h1>
          <h1 data-scroll data-scroll-speed="1">aslcamlsk</h1>

        </div> */}
        {/* <h1>Bookish Palm Tree</h1> */}

      </div>
    </div>
  )
}

export default HeroSection