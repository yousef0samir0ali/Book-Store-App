import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./modal.css";
import { faCartPlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Rating from "../book-slider/Rating";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import cartContext from "../../context/cartContext";

export default function Modal({ bookData, setOpenModal }) {
  let { addToCart } = useContext(cartContext);

  const [Qty, setQty] = useState(1);

  //Handle Change
  const handleChange = (e) => {
    setQty(e.target.value);
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 100) {
      setQty(value);
    } else {
      setQty(1);
    }
  };

  return (
    <div onClick={() => setOpenModal(false)} className="modal-container">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <FontAwesomeIcon
          onClick={() => setOpenModal(false)}
          icon={faCircleXmark}
          className="iconX"
        />
        <div className="image">
          <img src={`/books/${bookData.image}`} alt={bookData.title} />
        </div>
        <div className="info">
          <h5> {bookData.title} </h5>
          <div className="stock">
            <b>Status: </b>
            {bookData.inStock ? "in Stock" : "not in stock"}
          </div>
          <Rating rating={bookData.rating} reviews={bookData.reviews} />
          <div className="author">
            <b>Author: </b>
            {bookData.author}
          </div>
          <div className="price">
            <b>Price: </b>${bookData.price}
          </div>
          <div className="add-to-cart">
            <input
              type="number"
              min={1}
              max={100}
              value={Qty}
              onChange={handleChange}
            />

            <button onClick={() => addToCart({ ...bookData, quantity: Qty })}>
              <FontAwesomeIcon icon={faCartPlus} className="icon" />
              Add To Cart
            </button>
            <Link to={"/cart"} className="go-to-cart">
              go to cart
            </Link>
          </div>
          <Link to={`/book/${bookData.id}`} className="link">
            See More Details
          </Link>
        </div>
      </div>
    </div>
  );
}
