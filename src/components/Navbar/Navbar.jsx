import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";
import LoginIcon from "../../assets/icon/LoginIcon.png";

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

        <Link to="login" className="login__link">
          <img src={LoginIcon} className="login__link_icon" />
        </Link>
      </nav>
    </header>
  );
}
