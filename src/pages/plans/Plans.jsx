import headerImage from "../../assets/images/plans/headerImage.jpg";
import { plans } from "../../data";

import Header from "../../components/header/Header";
import Card from "../../UI/Card";

import "./plans.css";

const Plans = () => {
  return (
    <>
      <Header title={"Membership Plans"} image={headerImage}>
        <p>
          For any queries, lorem ipsum dolor sit amet consectetur adipisicing
          elit. Illum nesciunt, aliquid suscipit asperiores a reiciendis
          voluptas ipsum iste similique magni!
        </p>
      </Header>
      <section className="plans">
        <div className="container plans-container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card className="plan-card" key={id}>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`₹ ${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p
                      className={!available ? "disabled" : ""}
                      key={index}
                    >
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

export default Plans;
