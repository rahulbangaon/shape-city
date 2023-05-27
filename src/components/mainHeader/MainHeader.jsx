import {Link} from "react-router-dom";

import mainHeaderImage from "../../assets/images/home/main_header.png";

import "./mainHeader.css";

const MainHeader = ()=>{
    return (
        <header>
            <div className="container main-header-container">
                <div className="main-header-left">
                    <h4>#100DaysOfWorkout</h4>
                    <h1>Join The Legends of The Fitness World</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, error velit ratione itaque placeat deserunt.</p>
                    <Link to="/plans"><button className="get-started-btn btn lg">Get Started</button></Link>
                </div>
                <div className="main-header-right">
                        <div className="circle-container"></div>
                        <img src={mainHeaderImage} alt="Main Header Image" />
                </div>
            </div>
        </header>
    )
};

export default MainHeader;