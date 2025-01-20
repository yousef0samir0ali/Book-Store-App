import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../../components/book-slider/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCartPlus,
  faFile,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "./book.css";
import { useContext, useEffect, useState } from "react";
import cartContext from "../../context/cartContext";

export default function Book() {
  let { id } = useParams();
  const book = books.find((b) => b.id === +id); //parseInt(id) == +id

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { addToCart } = useContext(cartContext);
  const [qty, setQty] = useState(1);

  return (
    <div className="book">
      <div className="book-content">
        <img src={`/books/${book.image}`} alt={book.title} />
        <div className="info">
          <h1>{book.title}</h1>
          <div className="author">
            by<span> {book.author} </span>(Author)
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className="add-to-cart">
            <input
              type="number"
              min={1}
              max={100}
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <button onClick={() => addToCart({ ...book, quantity: qty })}>
              <FontAwesomeIcon icon={faCartPlus} className="icon" />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        doloremque dignissimos! Perspiciatis dignissimos ut, iure facere at sunt
        nihil voluptate laborum animi reprehenderit commodi possimus
        necessitatibus voluptas dolor fugit quos.lo Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae nam similique reiciendis fuga ullam
        laudantium qui, consectetur optio recusandae harum voluptatem aut
        doloremque amet aspernatur sunt rerum maxime, aperiam ad.{" "}
      </p>
      <div className="icons-wrapper">
        <div className="icon-content">
          <small>Print Length</small>
          <FontAwesomeIcon icon={faFile} className="icon" />
          <b> {book.printLength} Pages</b>
        </div>
        <div className="icon-content">
          <small>Language</small>
          <FontAwesomeIcon icon={faGlobe} className="icon" />
          <b> {book.language}</b>
        </div>
        <div className="icon-content">
          <small>Publication Date</small>
          <FontAwesomeIcon icon={faCalendarDays} className="icon" />
          <b> {book.PublicationDate} </b>
        </div>
      </div>
    </div>
  );
}
