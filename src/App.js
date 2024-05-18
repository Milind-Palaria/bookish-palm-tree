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
    <div>
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
