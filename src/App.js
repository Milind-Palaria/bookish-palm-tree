import { Route, Routes } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import List from "./pages/List";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LoginUser/>} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/book/list" element={<List/>} />

    </Routes>
  );
}

export default App;
