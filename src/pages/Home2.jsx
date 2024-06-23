import CurrentBooks from "./CurrentBooks";
import LandingPage from "../components/LandingPage";
import HeroSection from "../components/HeroSection";
import BestSellers from "../components/BestSellers";
const Home2 = () => {

  return (
    <div className="overflow-x-hidden bg-black text-white  lobster-regular ">
      <LandingPage/>
      <HeroSection/>
      <BestSellers/>
      <CurrentBooks />

    </div>
  )
}

export default Home2