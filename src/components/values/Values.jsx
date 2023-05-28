import { values } from "../../data";

import valuesImage from "../../assets/images/home/val.jpg";
import { GiCutDiamond } from "react-icons/gi";

import SectionTitle from "../sectionTitle/SectionTitle";
import Card from "../../UI/Card";

import "./values.css";

const Values = () => {
  return (
    <section className="values">
      <div className="container values-container">
        <div className="values-left">
          <img className="values-image" src={valuesImage} alt="Values Image" />
        </div>
        <div className="values-right">
          <SectionTitle icon={<GiCutDiamond />} title={"Values"} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            assumenda? Nam nesciunt expedita non maiores eos! Optio mollitia
            totam itaque nam.
          </p>
          <div className="values-wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className={"values-card"} key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
