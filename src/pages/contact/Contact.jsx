import {MdEmail} from "react-icons/md";
import {BsMessenger} from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io";

import headerImage from "../../assets/images/contact/headerImage.jpg";
import Header from '../../components/header/Header';

import './contact.css';



const Contact = () => {
  return (
    <>
      <Header title={"Get In Touch"} image={headerImage}>
        <p>
          Our team is always ready to hear from you when you Contact Us. Shape
          City is one of the top fitness club and we are available 24/7.
        </p>
      </Header>
      <section className="container contact-container">
        <div className="contact-wrapper">
          <a
            href="mailto:rahulbangaon@yahoo.com"
            target="blank"
            rel="noreferrer noopener"
          >
            <MdEmail />
          </a>
          <a href="https://wa.me/" target="blank" rel="noreferrer noopener">
            <IoLogoWhatsapp />
          </a>
          <a
            href="https://www.messenger.com"
            target="blank"
            rel="noreferrer noopener"
          >
            <BsMessenger />
          </a>
        </div>
      </section>
    </>
  );
};
export default Contact;