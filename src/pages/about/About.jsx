import headerImage from "../../assets/images/about/headerImage.jpg";
import storyImage from "../../assets/images/about/storyImage.jpg";
import visionImage from "../../assets/images/about/visionImage.jpg";
import missionImage from "../../assets/images/about/missionImage.jpg";

import Header from "../../components/header/Header";

import "./about.css";

const About = () => {
  return (
    <>
      <Header title={"About Us"} image={headerImage}>
        <p>
          We are the leading Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Pariatur ut eius dicta libero consequatur adipisci officia esse
          facere.
        </p>
      </Header>

      {/* story section */}

      <section className="about-story">
        <div className="container about-story-container">
          <div className="about-image about-story-image">
            <img src={storyImage} alt="Our Story Image" />
          </div>
          <div className="about-content about-story-content">
            <h1>Our Story</h1>
            <p>
              We are team of lorem ipsum dolor sit amet consectetur adipisicing
              elit. Commodi, atque! Ipsum vitae vero dolore quas numquam ex
              ratione iusto optio aperiam, voluptate sunt!
            </p>
            <p>
              Adding to this lorem ipsum dolor sit amet consectetur adipisicing
              quaerat tempora cum fugiat natus.
            </p>
            <p>
              Our success story lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Dolores tempora nisi ad velit vitae laborum
              earum atque in.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}

      <section className="about-vision">
        <div className="container about-vision-container">
          <div className="about-content about-vision-content">
            <h1>Our Vision</h1>

            <p>
              Our vision lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Dolores tempora nisi ad velit vitae laborum earum atque in.
            </p>

            <p>
              Adding to this lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ullam in, aliquid aliquam, illum voluptas dolores modi odio,
              possimus facere explicabo adipisci voluptatem labore molestias
              quaerat tempora cum fugiat natus.
            </p>
          </div>
          <div className="about-image about-vision-image">
            <img src={visionImage} alt="Our Mission Image" />
          </div>
        </div>
      </section>

      {/* mission section */}

      <section className="about-mission">
        <div className="container about-mission-container">
          <div className="about-image about-mission-image">
            <img src={missionImage} alt="Our Mission Image" />
          </div>
          <div className="about-content about-mission-content">
            <h1>Our Mission</h1>

            <p>
              Our mission lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Dolores tempora nisi ad velit vitae laborum earum atque in.
            </p>

            <p>
              Adding to this lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ullam in, aliquid aliquam, illum voluptas dolores modi odio,
              possimus facere explicabo adipisci voluptatem labore molestias
              quaerat tempora cum fugiat natus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
