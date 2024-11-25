import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const links = ["Host", "About", "Vans"];

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        #VanLife
      </Link>

      <nav className="header__nav">
        {links.map((link, index) => {
          return (
            <NavLink
              key={index}
              to={`/${link.toLocaleLowerCase()}`}
              className={({ isActive }) =>
                isActive ? "header__nav_link active" : "header__nav_link"
              }
            >
              {link}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}
