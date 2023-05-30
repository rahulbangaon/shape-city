import { Link } from "react-router-dom";
import logo from "../../assets/images/ShapeCityLogo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <article>
          <Link to={"/"} className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut
            doloremque maiores? Recusandae voluptatum itaque saepe quia id nisi.
            Blanditiis.
          </p>
          <div className="footer-socials">
            <a
              href="https://linkedin.com"
              target="blank"
              rel="noreferrer noopner"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="blank"
              rel="noreferrer noopner"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="blank"
              rel="noreferrer noopner"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="blank"
              rel="noreferrer noopner"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to={"/about"}>About</Link>
          <Link to={"/plans"}>Plans</Link>
          <Link to={"/trainers"}>Trainers</Link>
          <Link to={"/gallery"}>Gallery</Link>
          <Link to={"/contact"}>Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to={"/s"}>Blog</Link>
          <Link to={"/s"}>Case Studies</Link>
          <Link to={"/s"}>Events</Link>
          <Link to={"/s"}>Communities</Link>
          <Link to={"/s"}>FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to={"/contact"}>Contact Us</Link>
          <Link to={"/s"}>Support</Link>
        </article>
      </div>
      <div className="footer-copyright container">
        <small>
          Made with 💛 by{" "}
          <a
            href="https://www.linkedin.com/in/rahulbangaon"
            target="blank"
            rel="noreferrer noopner"
          >
            Rahul Dhaka Bangaon
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
