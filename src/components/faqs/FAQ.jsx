import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa";

const FAQ = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  return (
    <article
      className="faq"
      onClick={() => setIsAnswerShowing(!isAnswerShowing)}>
      <div className="question">
        <h4>{question}</h4>
        <span>{isAnswerShowing ? <FaMinus /> : <GoPlus />}</span>
      </div>
      <div
        className={`answer ${isAnswerShowing ? "answer-show" : "answer-hide"}`}
      >
        <p>{answer}</p>
      </div>
    </article>
  );
};

export default FAQ;
