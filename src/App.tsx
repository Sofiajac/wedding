import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import { FAQ, Program, Travel, Welcome } from "./components/pages";

interface AppProps {
  baseUrl: string;
}

export function App({ baseUrl }: AppProps) {
  const apiUrl = process.env.NODE_ENV === "production" ? `${baseUrl}/api` : "http://localhost:5000";
  return (
    <div className="container">
      <header className="header">
        <div className="banner">
          <div className="fancyText">Vi gifter oss</div>
          <div className="fancyText large">Johan & Emil</div>
          <div className="fancyText">16-17 augusti 2025</div>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome apiUrl={apiUrl} />} />
          <Route path="/program" element={<Program />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
