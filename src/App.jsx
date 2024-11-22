import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import VansPage from "./pages/VansPage/VansPage";
import VanDetail from "./pages/VanDetail/VabDetail";
import Footer from "./components/Footer/Footer";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vans" element={<VansPage />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
