import Card from "../../UI/Card";

import "./trainer.css";

const Trainer = ({ id, name, image, job, socials }) => {
  return (
    <Card className={"trainer-card"}>
      <div className="trainer-image">
        <img src={image} alt="Trainer Image" />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="trainer-socials">
        {socials.map(({ icon, link }, index) => {
          return (
            <a key={index} href={link} target="blank" rel="noopener noreffer">
              {icon}
            </a>
          );
        })}
      </div>
    </Card>
  );
};

export default Trainer;
