import { Route, Routes } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>main</h1>} />
      <Route path="/login" element={<LoginUser/>} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/book/list" element={<RegisterUser />} />

    </Routes>
  );
}

export default App;
