import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="text">Follow us on social media</div>
        <div className="icons">
          <div className="icon">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "red" }} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#2980b9" }} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faYoutube} style={{ color: "red" }} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faTwitter} style={{ color: "skyblue" }} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faTelegram} style={{ color: "darkblue" }} />
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="item">
          <h3>Usefull Links</h3>
          <ul>
            <Link
              to={"/"}
              className="link"
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </Link>
            <Link to={"/authors"} className="link">
              Authors
            </Link>
            <Link to={"/about"} className="link">
              About Us
            </Link>
            <Link to={"/contact"} className="link">
              Contact Us
            </Link>
            <Link to={"/register"} className="link">
              Register
            </Link>
          </ul>
        </div>
        <div className="item">
          <h3>Contact Information</h3>
          <div className="icon-wrapper">
            <div className="icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            Syria - Tartous
          </div>
          <div className="icon-wrapper">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            997 705 460
          </div>
          <div className="icon-wrapper">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            info@fackeemail.com
          </div>
        </div>
        <div className="item">
          <h3>About Us</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
            repellat? Enim autem at totam? Quisquam dolores ab quasi expedita
            culpa eos quis, quaerat blanditiis officiis amet a, omnis iusto sit?
          </p>
        </div>
      </div>
    </footer>
  );
}
