import "./HostLayout.scss";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <div className="host-nav__container">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive ? "host-nav__link active" : "host-nav__link"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="income"
            className={({ isActive }) =>
              isActive ? "host-nav__link active" : "host-nav__link"
            }
          >
            Income
          </NavLink>

          <NavLink
            to="vans"
            className={({ isActive }) =>
              isActive ? "host-nav__link active" : "host-nav__link"
            }
          >
            Vans
          </NavLink>

          <NavLink
            to="reviews"
            className={({ isActive }) =>
              isActive ? "host-nav__link active" : "host-nav__link"
            }
          >
            Reviews
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
