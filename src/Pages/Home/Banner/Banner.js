import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-bg"></div>
      <div className="banner-details text-center">
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>Tech Learner</h2>
        <p style={{ fontSize: "1.5rem" }}>
          Start your career with our Tech Courses
        </p>
        <Link to='/courses'>
          <button className="banner-btn">Let's Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
