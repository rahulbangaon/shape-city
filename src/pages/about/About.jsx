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
          Shape City is a forward-thinking, luxury fitness club with an emphasis
          on community and customer experience. We believe that all people
          should strive to live pain-free, healthy, and well-rounded lives.
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
              We’re a passionate and committed team, unified by our mission to
              build the most engaged community of athletes in the world.
            </p>
            <p>
              To enhance the quality of life in the communities, we serve
              through our fitness philosophy, facilities, programs, and products
              and to instill in the lives of people everywhere the value of
              health and fitness.
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
              To provide a high-quality fitness experience in a welcoming,
              non-intimidating environment, which we call the Judgement Free
              Zone, where anyone can feel they belong.
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
              We are passionate about high-performance living and we practice
              what we preach – investing time in our health and fitness.
            </p>

            <p>
              We believe that everyone has untapped potential within them and it
              takes a disruptive approach to unleash it. We dream big and don’t
              settle for the status quo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
