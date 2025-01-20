import {
  faBars,
  faPhone,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function HeaderTop({ setToggle, toggle }) {
  return (
    <div className="header-top">
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="header-top-menu"
      >
        {toggle ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
      <div className="header-top-phone">
        <FontAwesomeIcon icon={faPhone} style={{ marginRight: 4 }} />
        +963 997 705 460
      </div>
      <div className="header-top-text">Welcome To Online Book Store</div>
      <Link to="/login" className="header-top-link">
        <FontAwesomeIcon
          icon={faUser}
          style={{ marginRight: 4, fontSize: "25px" }}
        />
        Login
      </Link>
    </div>
  );
}
