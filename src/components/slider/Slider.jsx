import "./slider.css";
// @ts-ignore
import FirstImage from "/src/images/book1.png";
// @ts-ignore
import SecondImage from "../../images/book2.png";
// @ts-ignore
import ThirdImage from "../../images/book3.png";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left")
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    else setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };

  return (
    <div className="slider-container">
      <div onClick={() => handleClick("left")} className="arrow-left">
        <FontAwesomeIcon icon={faAnglesLeft} />
      </div>

      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className="slider-wrapper"
      >
        <div className="slide first-slide">
          <div className="slide-img">
            <img src={FirstImage} alt="dd" />
          </div>
          <div className="slide-info">
            <h1>Book Store</h1>
            <p>It`s not just reading. it`s living the adventure.</p>
          </div>
        </div>
        <div className="slide second-slide">
          <div className="slide-img">
            <img src={SecondImage} alt="dd" />
          </div>
          <div className="slide-info">
            <h1>The Books For Everyone</h1>
            <p>You can read at home or at the bookstore.</p>
          </div>
        </div>
        <div className="slide third-slide">
          <div className="slide-img">
            <img src={ThirdImage} alt="dd" />
          </div>
          <div className="slide-info">
            <h1>Check Out The New Titles</h1>
            <p>We send you the book you want at home.</p>
          </div>
        </div>
      </div>

      <div onClick={() => handleClick("right")} className="arrow-right">
        <FontAwesomeIcon icon={faAnglesRight} />
      </div>
    </div>
  );
}
