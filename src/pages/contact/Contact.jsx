import "./contact.css";
import {
  faHouseChimney,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-wrapper">
        <div className="item">
          <FontAwesomeIcon icon={faHouseChimney} className="icon" />
          <h1>Address</h1>
          <p>Syria, Tartous</p>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <h1>Phone</h1>
          <p>+963 997 705 460</p>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <h1>Email</h1>
          <p>info@fackeemail.com</p>
        </div>
      </div>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <h2>Contact Us Form</h2>
        <div className="input-wrapper">
          <input type="text" placeholder="Name *" />
          <input type="text" placeholder="Subject *" />
          <input type="email" placeholder="Email *" />
        </div>
        <textarea placeholder="Your Message *" rows={5}></textarea>
        <button className="send">Send</button>
      </form>
    </section>
  );
}
