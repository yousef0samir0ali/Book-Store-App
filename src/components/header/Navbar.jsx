import { NavLink } from "react-router-dom";

export default function Navbar({ toggle, setToggle }) {
  return (
    <nav style={{ left: toggle && 0 }} className="navbar">
      <ul>
        <NavLink
          to="/"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Home
        </NavLink>
        <NavLink
          to={"/authors"}
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Authors
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setToggle(false)}
          className=" navbar-link"
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/register"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Register
        </NavLink>
      </ul>
    </nav>
  );
}
