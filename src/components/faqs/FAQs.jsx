import { faqs } from "../../data";
import { FaQuestion } from "react-icons/fa";

import SectionTitle from "../sectionTitle/SectionTitle";
import "./faqs.css";
import FAQ from "./FAQ";

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs-container">
        <SectionTitle icon={<FaQuestion />} title={"FAQs"} />
        <div className="faqs-wrapper">
          {faqs.map(({ id, question, answer }) => {
            return <FAQ question={question} answer={answer} key={id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
