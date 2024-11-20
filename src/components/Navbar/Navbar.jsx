import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        #VanLife
      </Link>
      <nav className="header__nav">
        <Link to="/about" className="header__nav_link">
          About
        </Link>
      </nav>
    </header>
  );
}
