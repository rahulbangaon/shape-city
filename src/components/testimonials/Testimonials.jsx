import { testimonials } from "../../data";
import { ImQuotesLeft } from "react-icons/im";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import SectionTitle from "../sectionTitle/SectionTitle";
import Card from "../../UI/Card";

import "./testimonials.css";
import { useState } from "react";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { id, name, quote, job, avatar } = testimonials[index];

  const prevTestimonialHandler = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  return (
    <section className="testimonials">
      <div className="container testimonials-container">
        <SectionTitle
          icon={<ImQuotesLeft />}
          title={"Testimonials"}
          className="testimonials-title"
        />
        <div className="testimonial-wrapper">
          <Card className={"testimonial-card"}>
            <span className="testimonial-avatar-container">
              {" "}
              <img className="testimonial-avatar" src={avatar} alt={name} />
            </span>
            <div className="testimonial-content">
              <p className="testimonial-quote">{`"${quote}"`}</p>
              <h5>{name}</h5>
              <small>{job}</small>
            </div>
          </Card>
          <div className="testimonials-btn-container">
            <button
              className="testimonial-btn"
              onClick={prevTestimonialHandler}
            >
              <IoIosArrowDropleftCircle />
            </button>
            <button
              className="testimonial-btn"
              onClick={nextTestimonialHandler}
            >
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
