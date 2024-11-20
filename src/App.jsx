import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import VansPage from "./pages/VansPage/VansPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vans" element={<VansPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
