import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home2 from './pages/Home2';
import LoginUser from './pages/LoginUser';
import RegisterUser from './pages/RegisterUser';
import List from './pages/List';
import BookDetails from './pages/BookDetails';
import ViewOrders from './pages/ViewOrders';
import ViewOrderDetails from './pages/ViewOrderDetails';

const App: React.FC = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="m-0">
      {/* <video src={videoBg} autoPlay muted loop className=" fixed z-[-1] object-cover h-[100vh] w-full"/> */}
      {/* <img src={BgGradient} className="fixed z-[-1] object-cover h-[100vh] w-full"/> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/book/list" element={<List />} />
        <Route path="/book/view/:bookId" element={<BookDetails />} />
        <Route path="/book/orders" element={<ViewOrders />} />
        <Route path="/bookdd/orders/:bookId" element={<ViewOrderDetails />} />
      </Routes>
    </div>
  );
};

export default App;
