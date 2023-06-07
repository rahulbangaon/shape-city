import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

import headerImage from "../../assets/images/trainers/headerImage.jpg";
import { trainers } from "../../data";

import Header from "../../components/header/Header";

import "./trainers.css";
import Trainer from "../../components/trainer/Trainer";

const Trainers = () => {
  return (
    <>
      <Header image={headerImage} title={"Our Team"}>
        <p>
          The Shape City Team is made up of a small number of highly-qualified
          coaches who have completed The Shape City Internship and Training
          Programs, attained numerous other credentials in multiple fields, and
          demonstrated the high level of passion and commitment that our members
          deserve. They’re also a fun group that take their work seriously, but
          not themselves.
        </p>
      </Header>
      <section className="trainers">
        <div className="container trainers-container">
          {trainers.map(({ id, name, image, job, socials }) => {
            return (
              <Trainer
                key={id}
                name={name}
                job={job}
                image={image}
                socials={[
                  { icon: <AiFillInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedin />, link: socials[3] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
