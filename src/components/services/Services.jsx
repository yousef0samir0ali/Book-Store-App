import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./services.css";
import {
  faGift,
  faPaperPlane,
  faRotateRight,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
export default function Services() {
  return (
    <div className="services">
      <div className="service-item">
        <FontAwesomeIcon icon={faTruck} className="icon-item" />
        <b>Free Shipping</b>
      </div>
      <div className="service-item">
        <FontAwesomeIcon icon={faGift} className="icon-item" />
        <b>Gift Card</b>
      </div>
      <div className="service-item">
        <FontAwesomeIcon icon={faRotateRight} className="icon-item" />
        <b>7 Days Return</b>
      </div>
      <div className="service-item">
        <FontAwesomeIcon icon={faPaperPlane} className="icon-item" />
        <b>Contact Us</b>
      </div>
    </div>
  );
}
