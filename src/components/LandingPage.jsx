import React from 'react'

const LandingPage = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden bg-black text-white  lobster-regular flex justify-around underline overflow-y-hidden">
        {/* <div className="flex flex-col w-1/2 items-center">
                <h1 className=" translate-y-5">Bookish</h1>
                <h1 className=" translate-y-5">Palm</h1>
                <h1 className=" translate-y-5 ">Tree .</h1>
                </div> */}
        <div className=" w-full h-full mt-4  overflow-y-hidden">

          <h1 className="absolute mix-blend-normal text-nowrap left-0 right-0 text-center text-[8rem] mt-[-10] text-gsap opacity-0">— Bookish —</h1>

          <img src="book1.jpg" alt="book" className=" w-[80%] h-1/4 m-auto object-cover img-gsap  img1-gsap opacity-0" />

          <h1 className="absolute mix-blend-normal text-nowrap left-0 right-0 text-center text-[8rem] mt-7 text-gsap opacity-0">— Palm — </h1>

          <img src="book2.jpg" alt="book" className=" w-[80%] h-1/4  m-auto mt-10 object-cover img-gsap img2-gsap opacity-0" />

          <h1 className="absolute mix-blend-normal left-0 right-0 text-center text-[8rem] mt-5 text-gsap opacity-0">— tree — </h1>

          <img src="book3.jpg" alt="book" className=" w-[80%] h-1/4  m-auto mt-10 object-cover img-gsap img3-gsap opacity-0" />

        </div>
      </div>
  )
}

export default LandingPage