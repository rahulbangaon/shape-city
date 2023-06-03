import headerImage from "../../assets/images/gallery/headerImage.jpg";
import { galleryImages } from "../../data";

import Header from "../../components/header/Header";

import "./gallery.css";

const Gallery = () => {
  return (
    <>
      <Header title={"Gallery"} image={headerImage}>
        <p>
          Look at the leading Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Pariatur ut eius dicta libero consequatur adipisci officia esse
          facere.
        </p>
      </Header>
      <section className=" container gallery">
        <div className="gallery-container">
          {galleryImages.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery Image ${index}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
