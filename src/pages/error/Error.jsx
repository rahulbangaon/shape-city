import {Link} from "react-router-dom";

import './error.css';

const Error = () => {
  return (
    <section className="error">
      <div className="container error-container">
        <h1>404 Page Not Found</h1>
        <Link to={'/'} className="btn">Go Back to Home</Link>
      </div>
    </section>
  )
};

export default Error;