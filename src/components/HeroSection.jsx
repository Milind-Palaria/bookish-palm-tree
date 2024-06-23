
const HeroSection = () => {
  return (
    <div className="h-screen">
      <div className=" h-full text-5xl">
        <div className=" w-screen flex  flex-col items-center justify-center gap-20">
        <div className="left-0">
        <img src="hero-1.jpg" alt="Hero Image" className=" w-[60%] absolute left-[14vw]"  data-scroll data-scroll-speed="0.4"/>
        <img src="hero-2.jpg" alt="Hero Image" className=" w-[60%] absolute left-[20vw]"  data-scroll data-scroll-speed="0.7"/>
        <img src="hero-3.jpg" alt="Hero Image" className=" w-[60%] absolute left-[8vw]"  data-scroll data-scroll-speed="1"/>
        </div>
        <div className="absolute right-0">
          <h1>Register</h1>
          <h1>Login</h1>
          <h1>List</h1>
          <h1>View Orders</h1>

        </div>
        </div>
{/* 
      <h1 className="my-4" data-scroll data-scroll-speed="0.4">Hero Section</h1>
      <h1  className="my-4" data-scroll data-scroll-speed="0.6">second</h1>
      <h1  className="my-4" data-scroll data-scroll-speed="1">Third</h1> */}
      </div>
    </div>
  )
}

export default HeroSection