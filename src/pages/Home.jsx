import { Link } from "react-router-dom";
import Testimonials2 from "../components/Testimonials_2";
import { getAssetUrl } from "../utils/assets.js";
import LottiePlayer from "../components/LottiePlayer.jsx";
import { useEffect, useState } from "react";

const stats = [
  ["6+", "Career Tracks"],
  ["45 Days", "Fast-Track Options"],
  ["3-6 Months", "Deep Training"],
  ["100%", "Project-Based"],
];

export default function Home() {

  const [hero, setHero] = useState(null);

  useEffect(() => {
      const fetchHome = async () => {
          try {
              const response = await fetch(
                  "https://alphaitms.com/wp-json/training/v1/home"
              );
              const data = await response.json();
              setHero(data);
          } catch (error) {
              console.error(error);
          }
      };
  
      fetchHome();
  }, []);

  console.log(hero, 'heroooooo');

  return (
    <>
      <section className="banner_part reconstructed_hero home-hero">
        <div className="hero-bg-tint" />
        <img className="hero-illustration" src={hero?.hero_image} alt="" aria-hidden="true" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-7">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h5 className="hero-eyebrow-fixed">India's Fastest Growing Industrial Training Institute</h5>
                  <h1>{hero?.hero_title}</h1>
                  <p>
                    {hero?.hero_description}
                  </p>
                  <div className="home-hero-actions">
                    <Link to="/courses" className="home-primary-btn">Explore Courses</Link>
                    <Link to="/register" className="home-secondary-btn">Register Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-stats-strip">
            {stats.map(([value, label]) => (
              <div className="home-stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="feature_part home-feature-section">
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="single_feature_text feature_card_equal home-intro-card">
                <span className="home-kicker">Why Choose Us</span>
                <h2>{hero?.why_choose_us_heading}</h2>
                <p>
                  {hero?.why_choose_us_description}
                </p>
                <Link to="/about" className="btn_1">{hero?.why_choose_us_button_text}</Link>
              </div>
            </div>
            {hero?.why_choose_us_features.map((feature) => (
              <div className="col-12 col-md-6 col-lg-3 mb-4" key={feature.heading}>
                <div className="single_feature feature_card_gradient home-feature-card">
                  <div className="single_feature_part">
                    <div className="iconContainer">
                      <img src={feature.icon} alt={feature.heading} className="feature_gif" />
                    </div>
                    <h3>{feature.heading}</h3>
                    <p>{feature.description}</p>
                  </div>
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
                <img src={hero?.about_us_image} alt="learning" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="premium_learning_text">
                <h5>ABOUT US</h5>
                <h2>{hero?.about_us_title}</h2>
                <p>{hero?.about_us_text}</p>
                <ul>
                {hero?.about_us_feature.map((feature) => (
                  <li key={feature.icon_class}><span className={feature.icon_class} />{feature.text}</li>
                ))}
                </ul>
                <Link to="/about" className="btn_1">{hero?.about_us_button_text}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="special_cource home-courses-section">
        <div className="container">
          <div className="home-section-heading text-center">
            <span className="home-kicker">Technical Courses</span>
            <h2>Industry-ready programs for practical growth</h2>
            <p>Choose a focused track and build a portfolio through guided projects, labs, and capstones.</p>
          </div>
          <div className="row mb-2">
            {hero?.all_courses.map((course) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={course.link_text}>
                <div className="single_special_cource home-course-card">
                  {course.title === "AI & Machine Learning" ? (
                    <div className="special_img lottie_home_card_wrap">
                      <LottiePlayer
                        src={getAssetUrl("/ai-lottie.json")}
                        style={{ width: "100%", height: "200px", margin: "0 auto" }}
                      />
                    </div>
                  ) : course.title === "Data Science" ? (
                    <div className="special_img lottie_home_card_wrap">
                      <LottiePlayer
                        src={getAssetUrl("/ds-lottie.json")}
                        style={{ width: "100%", height: "200px", margin: "0 auto" }}
                      />
                    </div>
                  ) : course.title === "Data Analytics" ? (
                    <div className="special_img lottie_home_card_wrap">
                      <LottiePlayer
                        src={getAssetUrl("/dashboard-lottie.json")}
                        style={{ width: "100%", height: "200px", margin: "0 auto" }}
                      />
                    </div>
                  ) : course.title === "MERN Full Stack Development" ? (
                    <div className="special_img lottie_home_card_wrap">
                      <LottiePlayer
                        src={getAssetUrl("/fs-lottie.json")}
                        style={{ width: "100%", height: "200px", margin: "0 auto" }}
                      />
                    </div>
                  ) : course.title === "Blockchain & Web3 Development" ? (
                    <div className="special_img lottie_home_card_wrap">
                      <LottiePlayer
                        src={getAssetUrl("/blockchain-lottie.json")}
                        style={{ width: "100%", height: "200px", margin: "0 auto" }}
                      />
                    </div>
                  ) : course.title === "Cybersecurity & Ethical Hacking" ? (
                    <div className="special_img lottie_home_card_wrap">
                      <LottiePlayer
                        src={getAssetUrl("/cyber-lottie.json")}
                        style={{ width: "100%", height: "200px", margin: "0 auto" }}
                      />
                    </div>
                  ) : (
                    <img src={course.image} className="special_img" alt={course.title} />
                  )}
                  <div className="special_cource_text">
                    <Link to="/courses" className="btn_4">{course.link_text}</Link>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="home-section-action text-center">
            <Link to="/courses" className="home-primary-btn">View All Courses</Link>
          </div>
        </div>
      </section>

      <Testimonials2 />

      <section className="activities_section home-activities-section">
        <div className="container">
          <div className="home-section-heading text-center">
            <span className="home-kicker">Student Activities</span>
            <h2>{hero?.activities_title}</h2>
            <p>{hero?.activities_text}</p>
          </div>
          <div className="row g-4 justify-content-center">
            {hero?.activities.map((activity) => (
              <div className="col-12 col-md-6 col-lg-4" key={activity.title}>
                <div className="activity_card home-activity-card">
                  <img src={activity.image} className="activity_thumb" alt={activity.title} />
                  <div className="activity_content_wrapper">
                    <h4>{activity.title}</h4>
                    <p>{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="home-section-action text-center">
            <Link to="/activities" className="home-primary-btn">View Full Activities Page</Link>
          </div>
        </div>
      </section>
    </>
  );
}
