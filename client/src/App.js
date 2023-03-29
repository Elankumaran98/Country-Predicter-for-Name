import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Predicter from "./pages/Predicter";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/predicter" element={<Predicter />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
