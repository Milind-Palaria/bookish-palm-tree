import { Route, Routes } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import List from "./pages/List";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1 className=" text-8xl">main</h1>} />
      <Route path="/login" element={<LoginUser/>} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/book/list" element={<List/>} />

    </Routes>
  );
}

export default App;
