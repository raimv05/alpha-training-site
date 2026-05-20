import React from "react";
import { Link } from "react-router-dom";
import Testimonials_2 from "../components/Testimonials_2";
import { getAssetUrl } from "../utils/assets.js";

export default function About() {
  return (
    <>
      <section className="premium_breadcrumb">
        <div className="container">
          <div className="breadcrumb_content">
            <h2>About Us</h2>
            <p>Home <span>/</span> About Us</p>
          </div>
        </div>
      </section>

      <section className="premium_feature_section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3">
              <div className="premium_feature_text">
                <h2>Why <br /> Choose Us?</h2>
                <p>We empower students with industry-ready training, real-world projects, and hands-on mentorship from top-tier professionals.</p>
                <Link to="/courses" className="btn_1">Explore Courses</Link>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="premium_feature_card">
                <div className="pf_icon">
                  <img src={getAssetUrl("/icons/future.gif")} alt="icon" />
                </div>
                <h4>Better Future</h4>
                <p>Learn with top instructors, industry projects & skill-based modules designed to prepare you for real jobs.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="premium_feature_card">
                <div className="pf_icon">
                  <img src={getAssetUrl("/icons/training.gif")} alt="icon" />
                </div>
                <h4>Qualified Trainers</h4>
                <p>Learn from experienced trainers working in top companies with deep domain knowledge & mentoring skills.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="premium_feature_card">
                <div className="pf_icon">
                  <img src={getAssetUrl("/icons/job.gif")} alt="icon" />
                </div>
                <h4>Job Opportunities</h4>
                <p>We ensure placement assistance, industry networking, project-based upskilling & internship support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="premium_learning_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="premium_learning_img">
                <img src={getAssetUrl("/img/learning_img.gif")} alt="learning" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="premium_learning_text">
                <h5>ABOUT US</h5>
                <h2>Learning with Love <br />and Innovation</h2>
                <p>We are dedicated to providing an innovative learning environment where students grow through practical exposure, real-world challenges, and mentor-driven development.</p>
                <ul>
                  <li><span className="ti-pencil-alt" />Hands-on projects from Day 1 with industry guidance.</li>
                  <li><span className="ti-ruler-pencil" />Personal mentorship & skill-building modules.</li>
                </ul>
                <Link to="/about" className="btn_1">Know More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials_2 />
    </>
  );
}
