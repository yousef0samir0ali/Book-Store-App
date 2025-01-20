import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./book.slider.css";
import {
  faCartPlus,
  faChevronLeft,
  faChevronRight,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import Rating from "./Rating";
import Modal from "../modal/Modal";
import cartContext from "../../context/cartContext";
export default function BookSlider({ data }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);

  // @ts-ignore
  const { addToCart } = useContext(cartContext);

  //Handle Modal
  const handleModal = (book) => {
    setOpenModal(true);
    setBookData(book);
  };

  //Handle Click To Book Slider
  //340 is width book-slide-item plus(+) margin
  const handleClick = (direction) => {
    if (direction === "left")
      setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1 * -360);
    else
      setSlideIndex(
        slideIndex === (data.length - 1) * -360
          ? (data.length - 1) * -360
          : slideIndex + 1 * -360
      );
  };
  return (
    <div className="book-slider-container">
      <div onClick={() => handleClick("left")} className="arrow-left">
        <FontAwesomeIcon icon={faChevronLeft} className="" />
      </div>

      <div
        style={{ transform: `translateX(${slideIndex}px)` }}
        className="book-slider-wrapper"
      >
        {data.map((item) => (
          <div key={item.id} className="book-slide-item">
            <img
              src={`/Book-Store-App/books/${item.image}`}
              alt={item.title}
              className="book-slide-img"
            />
            <h2>{item.title} </h2>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="price"> ${item.price}</div>
            <div className="icons">
              <FontAwesomeIcon
                onClick={() => {
                  handleModal(item);
                }}
                icon={faEye}
                className="icon"
              />
              <FontAwesomeIcon
                icon={faCartPlus}
                className="icon"
                onClick={() => addToCart({ ...item, quantity: 1 })}
              />
            </div>
          </div>
        ))}
      </div>
      <div onClick={() => handleClick("right")} className="arrow-right">
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
    </div>
  );
}
