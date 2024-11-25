import "./HostLayout.scss";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="/host"
          end
          className={({ isActive }) =>
            isActive ? "host-nav__link active" : "host-nav__link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/host/income"
          className={({ isActive }) =>
            isActive ? "host-nav__link active" : "host-nav__link"
          }
        >
          Income
        </NavLink>

        <NavLink
          to="/host/vans"
          className={({ isActive }) =>
            isActive ? "host-nav__link active" : "host-nav__link"
          }
        >
          Vans
        </NavLink>

        <NavLink
          to="/host/reviews"
          className={({ isActive }) =>
            isActive ? "host-nav__link active" : "host-nav__link"
          }
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
