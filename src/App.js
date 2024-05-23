import { Route, Routes } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import List from "./pages/List";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import BookDetails from "./pages/BookDetails";
import ViewOrders from "./pages/ViewOrders";
import ViewOrderDetails from "./pages/ViewOrderDetails";
import { useEffect } from "react";
import { messaging } from "./context/Firebase";
import { getToken } from "firebase/messaging";
import videoBg from "./assests/gradient-1.mp4"
import BgGradient from "./assests/g3.jpg"

function App() {

  // async function requestPermission() {
  //   const permission = await Notification.requestPermission()
  //   if (permission === 'granted') {
  //     //Generate TOken
  //     const token = await getToken(messaging,{vapidKey:"BP44b81S2bMSL6fFe_BSX0GdBfheRq3M_FNg30KR8Sy7xin4E5SF2bJqHudtkuucRur45tCasns_Jo1CRMNniss"})
  //     console.log("Token Generated", token)
  //   }
  //   else if (permission === 'denied') {
  //     alert('You have blocked notifications')
  //   }
  // }

  // useEffect(() => {
  //   requestPermission()
  // }, [])

  return (
    <div className=" m-0 bg-[#000000] w-full h-[100vh]">
      {/* <video src={videoBg} autoPlay muted loop className=" fixed z-[-1] object-cover h-[100vh] w-full"/> */}
      {/* <img src={BgGradient} className="fixed z-[-1] object-cover h-[100vh] w-full"/> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/book/list" element={<List />} />
        <Route path="/book/view/:bookId" element={<BookDetails />} />
        <Route path="/book/orders" element={<ViewOrders />} />
        <Route path="/bookdd/orders/:bookId" element={<ViewOrderDetails />} />
      </Routes>
    </div>
  );
}
export default App;
