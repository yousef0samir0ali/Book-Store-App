import {
  faBookOpen,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cartContext from "../../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function HeaderMiddle() {
  const { cartItemsLength } = useContext(cartContext);

  return (
    <div className="header-middle">
      <Link to="/" className="header-middle-logo">
        <b>Book</b>
        <FontAwesomeIcon
          icon={faBookOpen}
          style={{ margin: "0 6" }}
          className="icon"
        />
        <b>Store</b>
      </Link>
      <div className="header-middle-search-box">
        <input type="search" placeholder="Search in book store..." />
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
      </div>
      <Link to="/cart" className="header-middle-cart">
        {cartItemsLength > 0 && (
          <b className="notifications"> {cartItemsLength} </b>
        )}
        <b>Your</b>
        <FontAwesomeIcon icon={faCartShopping} className="icon" />
        <b>Cart</b>
      </Link>
    </div>
  );
}
