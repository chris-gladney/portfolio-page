import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <ul className="navigation">
        <li className="link">
          <Link to="/contact" className="contact">
            Contact
          </Link>
        </li>
        <li className="link">
          <Link to="/portfolio" className="portfolio">
            Portfolio
          </Link>
        </li>
        <li className="link">
          <Link to="/" className="about">
            About
          </Link>
        </li>
      </ul>
      <h1>Chris Gladney</h1>

    </>
  );
}

export default Contact;
