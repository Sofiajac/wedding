import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import { FAQ, Program, Travel, Welcome } from "./components/pages";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="banner">
          <div className="fancyText">Vi gifter oss</div>
          <div className="fancyText large">Emil & Johan</div>
          <div className="fancyText">16-17 augusti 2025</div>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/program" element={<Program />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
