import { Route, Routes } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import List from "./pages/List";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import BookDetails from "./pages/BookDetails";
import ViewOrders from "./pages/ViewOrders";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/book/list" element={<List />} />
        <Route path="/book/view/:bookId" element={<BookDetails/>} />
        <Route path="/book/orders" element={<ViewOrders/>} />

      </Routes>
    </div>
  );
}

export default App;
