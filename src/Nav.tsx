import { Link } from "react-router-dom";

function Nav() {
    return (
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
    )
}

export default Nav;