import { FaCrown } from "react-icons/fa";
import headerImage from "../../assets/images/plans/headerImage.jpg";
import { memberships } from "../../data";

import Header from "../../components/header/Header";
import Card from "../../UI/Card";

import "./memberships.css";

const Memberships = () => {
  return (
    <>
      <Header title={"Membership Plans"} image={headerImage}>
        <p>
          Looking for a gym membership with the staff, tools and services needed
          to crush your health goals? say hello to Shape City.
        </p>
      </Header>
      <section className="plans">
        <div className="container plans-container">
          {memberships.map(({ id, name, desc, price, features }) => {
            return (
              <Card className="plan-card" key={id}>
                <span className="membership-icon">
                  <FaCrown />
                </span>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`₹${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p className={!available ? "disabled" : ""} key={index}>
                      {feature}
                    </p>
                  );
                })}

                {/* choose button */}
                <button className="btn lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Memberships;
