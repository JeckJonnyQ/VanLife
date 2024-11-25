import "./Dashboard.scss";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <Outlet />
      <h1>Dashboard COmponent HERE!</h1>
    </>
  );
}
