import headerImage from "../../assets/images/gallery/headerImage.jpg";
import { galleryImages } from "../../data";

import Header from "../../components/header/Header";

import "./gallery.css";

const Gallery = () => {
  return (
    <>
      <Header title={"Gallery"} image={headerImage}>
        <p>
          Shape City has one of the best tools and trainers from all around the world which makes your fitness journey very easy and comfort.
          Took a look at at our of Shape City gallery.
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
