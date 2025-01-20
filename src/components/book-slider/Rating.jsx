import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({ rating, reviews }) {
  let stars = [];

  for (let i = 1; i <= 5; i++)
    stars.push(
      <div key={i}>
        {rating >= i ? (
          <FontAwesomeIcon icon={faStar} className="icon" />
        ) : rating >= i - 0.5 ? (
          <FontAwesomeIcon icon={faStarHalfStroke} className="icon" />
        ) : (
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#0000004d" }}
            className="icon"
          />
        )}
      </div>
    );

  return (
    <div className="rating">
      {stars}
      <span>{rating}</span>
      <span>({reviews} reviews)</span>
    </div>
  );
}
