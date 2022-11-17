import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import ForgetPass from "./Screens/ForgetPass";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetPass" element={<ForgetPass />} />
      </Routes>
    </div>
  );
}

export default App;
