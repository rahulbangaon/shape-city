import { Link } from "react-router-dom";

import mainHeaderImage from "../../assets/images/home/main_header.png";

import "./mainHeader.css";

const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="container main-header-container">
        <div className="main-header-left">
          <h4>#100DaysOfWorkout</h4>
          <h1>Building confidence. Building fitness.</h1>
          <p>
            Shape City is a forward-thinking, luxury fitness club with an
            emphasis on community and customer experience. We believe that all
            people should strive to live pain-free, healthy, and well-rounded
            lives.
          </p>
          <Link to="/memberships">
            <button className="get-started-btn btn lg">Get Started</button>
          </Link>
        </div>
        <div className="main-header-right">
          <div className="circle-container"></div>
          <img src={mainHeaderImage} alt="Main Header Image" />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
