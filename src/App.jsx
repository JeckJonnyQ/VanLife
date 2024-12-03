import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout/Layout";
import HostLayout from "./components/HostLayout/HostLayout";
import Error from "./components/Error/Error";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import VansPage, { loader as vansPageLoader } from "./pages/VansPage/VansPage";

import VanDetail from "./pages/VansPage/VanDetail/VanDetail";
import Dashboard from "./pages/HostPage/Dashboard/Dashboard";
import Income from "./pages/HostPage/Income/Income";
import HostVans from "./pages/HostPage/HostVans/HostVans";
import Reviews from "./pages/HostPage/Reviews/Reviews";

import HostVanDetail from "./pages/HostPage/HostVans/HostVanDetail/HostVanDetail";
import HostVanInfo from "./pages/HostPage/HostVans/HostVanDetail/HostVanInfo/HostVanInfo";
import HostVanPricing from "./pages/HostPage/HostVans/HostVanDetail/HostVanPricing/HostVanPricing";
import HostVanPhotos from "./pages/HostPage/HostVans/HostVanDetail/HostVanPhotos/HostVanPhotos";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import "./server";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route
        path="vans"
        element={<VansPage />}
        errorElement={<Error />}
        loader={vansPageLoader}
      />
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
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

// ЕЩЕ ОДИН СПОСОБ СОЗДАНИЯ РОУТОВ

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route path="about" element={<AboutPage />} />
//           <Route path="vans" element={<VansPage />} />
//           <Route path="vans/:id" element={<VanDetail />} />

//           <Route path="host" element={<HostLayout />}>
//             <Route index element={<Dashboard />} />
//             <Route path="income" element={<Income />} />
//             <Route path="reviews" element={<Reviews />} />
//             <Route path="vans" element={<HostVans />} />

//             <Route path="vans/:id" element={<HostVanDetail />}>
//               <Route index element={<HostVanInfo />} />
//               <Route path="pricing" element={<HostVanPricing />} />
//               <Route path="photos" element={<HostVanPhotos />} />
//             </Route>
//           </Route>
//           <Route path="*" element={<NotFoundPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
