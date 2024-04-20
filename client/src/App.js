import './App.css';
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;