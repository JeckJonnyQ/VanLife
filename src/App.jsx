import React from "react";
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
import LoginPage, { loader as loginLoader } from "./pages/LoginPage/LoginPage";

import VanDetail, {
  loader as vanDetailLoader,
} from "./pages/VansPage/VanDetail/VanDetail";
import Dashboard from "./pages/HostPage/Dashboard/Dashboard";
import Income from "./pages/HostPage/Income/Income";
import HostVans, {
  loader as hostVansLoader,
} from "./pages/HostPage/HostVans/HostVans";
import Reviews from "./pages/HostPage/Reviews/Reviews";

import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/HostPage/HostVans/HostVanDetail/HostVanDetail";
import HostVanInfo from "./pages/HostPage/HostVans/HostVanDetail/HostVanInfo/HostVanInfo";
import HostVanPricing from "./pages/HostPage/HostVans/HostVanDetail/HostVanPricing/HostVanPricing";
import HostVanPhotos from "./pages/HostPage/HostVans/HostVanDetail/HostVanPhotos/HostVanPhotos";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { requireAuth } from "./utils/redirectToHome";
import "./server";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="login" element={<LoginPage />} loader={loginLoader} />
      <Route
        path="vans"
        element={<VansPage />}
        errorElement={<Error />}
        loader={vansPageLoader}
      />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />

        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => await requireAuth()}
          />
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
