import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
import HostLayout from "./components/HostLayout/HostLayout";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import VansPage from "./pages/VansPage/VansPage";

import VanDetail from "./pages/VansPage/VanDetail/VanDetail";
import Dashboard from "./pages/HostPage/Dashboard/Dashboard";
import Income from "./pages/HostPage/Income/Income";
import HostVans from "./pages/HostPage/HostVans/HostVans";
import Reviews from "./pages/HostPage/Reviews/Reviews";

import HostVanDetail from "./pages/HostPage/HostVans/HostVanDetail/HostVanDetail";
import HostVanInfo from "./pages/HostPage/HostVans/HostVanDetail/HostVanInfo/HostVanInfo";
import HostVanPricing from "./pages/HostPage/HostVans/HostVanDetail/HostVanPricing/HostVanPricing";
import HostVanPhotos from "./pages/HostPage/HostVans/HostVanDetail/HostVanPhotos/HostVanPhotos";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="vans" element={<VansPage />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
