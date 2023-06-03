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
          For any queries, lorem ipsum dolor sit amet consectetur adipisicing
          elit. Illum nesciunt, aliquid suscipit asperiores a reiciendis
          voluptas ipsum iste similique magni!
        </p>
      </Header>
      <section className="container contact-container">
        <div className="contact-wrapper">
          <a href="mailto:rahulbangaon@yahoo.com" target="blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="mailto:rahulbangaon@yahoo.com" target="blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          <a href="mailto:rahulbangaon@yahoo.com" target="blank" rel="noreferrer noopener"><BsMessenger/></a>
        </div>
      </section>
    </>
  );
};
export default Contact;