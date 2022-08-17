import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>
        <span>Symons</span> Woodshop
      </h1>

      <nav className="nav-bar">
        <ul>
          <li>
            <Link to={"/"} className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="link">
              About
            </Link>
          </li>
          <li>
            <Link to={"/products"} className="link">
              Products
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
