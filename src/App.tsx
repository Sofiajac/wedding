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
        <div className="imageBanner">
          <h1 className="fancyText h1">Johan & Emil</h1>
          <h2 className="fancyText h2">16-17 augusti 2025</h2>
          <div className="buttonWrapper">
            <Button
              title="o.s.a"
              wide
              onClick={() => null} // FIXME
            />
          </div>
        </div>
        <Navbar />
      </header>
      <div className="pagesContainer">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/program" element={<Program />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
