import { values } from "../../data";

import valuesImage from "../../assets/images/home/valueImage.jpg";
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
            Shape City exists for one reason – To provide a safe environment for
            our members to challenge themselves and attain the level of Health,
            Wellness and Vitality that is their birthright. Our coaches are
            passionate, committed, and will engage with members on all levels to
            assist them on their journey.
          </p>
          <div className="values-wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className={"value-card"} key={id}>
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
