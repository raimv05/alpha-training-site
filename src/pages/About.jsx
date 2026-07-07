import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Testimonials_2 from "../components/Testimonials_2";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
      const fetchAbout = async () => {
          try {
              const response = await fetch(
                  "https://alphaitms.com/wp-json/training/v1/home"
              );
              const data = await response.json();
              setAbout(data);
          } catch (error) {
              console.error(error);
          }
      };
  
      fetchAbout();
  }, []);
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
                <p>{about?.why_choose_us_description}</p>
                <Link to="/courses" className="btn_1">{about?.why_choose_us_button_text}</Link>
              </div>
            </div>
            {about?.why_choose_us_features.map((feature) => (
              <div className="col-lg-3" key={feature.heading}>
                <div className="premium_feature_card">
                  <div className="pf_icon">
                    <img src={feature.icon} alt="icon" />
                  </div>
                    <h4>{feature.heading}</h4>
                    <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="premium_learning_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="premium_learning_img">
                <img src={about?.about_us_image} alt="learning" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="premium_learning_text">
                <h5>ABOUT US</h5>
                <h2>{about?.about_us_title}</h2>
                <p>{about?.about_us_text}</p>
                <ul>
                  {about?.about_us_feature.map((feature) => (
                    <li key={feature.icon_class}><span className={feature.icon_class} />{feature.text}</li>
                  ))}
                </ul>
                <Link to="/courses" className="btn_1">{about?.about_us_button_text}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials_2 />
    </>
  );
}
