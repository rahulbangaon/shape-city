import { Link } from "react-router-dom";

import { FaCrown } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import SectionTitle from "../sectionTitle/SectionTitle";
import Card from "../../UI/Card";

import { programs } from "../../data";

import "./programs.css";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs-container">
        <SectionTitle icon={<FaCrown />} title={"Programs"} />
        <div className="programs-wrapper">
          {programs.map(({ icon, id, title, info, path }) => {
            return (
              <Card className={"programs-program "} key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn More <AiFillCaretRight />{" "}
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
