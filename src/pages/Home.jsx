import { Link } from "react-router-dom";
import Testimonials2 from "../components/Testimonials_2";
import { getAssetUrl } from "../utils/assets.js";
import LottiePlayer from "../components/LottiePlayer.jsx";
import { useData } from "../context/DataContext.jsx";

const features = [
  {
    title: "Build a Better Future",
    image: "/icons/future.gif",
    text: "Learn job-ready skills with practical tools, guided projects, and career-focused mentorship.",
  },
  {
    title: "Qualified Industry Trainers",
    image: "/icons/training.gif",
    text: "Train under certified IT professionals with hands-on experience across modern technology stacks.",
  },
  {
    title: "High-Value Job Opportunities",
    image: "/icons/job.gif",
    text: "Get internship support, placement guidance, and industry exposure that accelerates your career.",
  },
];

const stats = [
  ["6+", "Career Tracks"],
  ["45 Days", "Fast-Track Options"],
  ["3-6 Months", "Deep Training"],
  ["100%", "Project-Based"],
];

export default function Home() {
  const { courses, activities } = useData();

  const getCourseTag = (course) => {
    switch (course.id) {
      case "ai": return "AI & Machine Learning";
      case "ds": return "Data Science";
      case "da": return "Data Analytics";
      case "fsd": return "Full Stack";
      case "blockchain": return "Blockchain";
      case "cyber": return "Cybersecurity";
      default: return "IT Course";
    }
  };

  const getLottieSrc = (id) => {
    switch (id) {
      case "ai": return "/ai-lottie.json";
      case "ds": return "/ds-lottie.json";
      case "da": return "/dashboard-lottie.json";
      case "fsd": return "/fs-lottie.json";
      case "blockchain": return "/blockchain-lottie.json";
      case "cyber": return "/cyber-lottie.json";
      default: return null;
    }
  };

  // Select first 6 activities for homepage preview
  const homepageActivities = activities.slice(0, 6);

  return (
    <>
      <section className="banner_part reconstructed_hero home-hero">
        <div className="hero-bg-tint" />
        <img className="hero-illustration" src={getAssetUrl("/img/banner_img.png")} alt="" aria-hidden="true" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-7">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h5 className="hero-eyebrow-fixed">India's Fastest Growing Industrial Training Institute</h5>
                  <h1>Empowering Students With Job-Ready IT Skills for a Future-Proof Career</h1>
                  <p>
                    Join industry experts and learn in-demand technologies such as AI/ML, Data Science,
                    Full-Stack Development, Cybersecurity, and Blockchain through hands-on projects,
                    real case studies, and mentor-led training.
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
                <h2>Training Built Around Real Work</h2>
                <p>
                  Our programs turn academic learning into practical confidence with guided projects,
                  tools used by companies, and continuous mentor support.
                </p>
                <Link to="/about" className="btn_1">Explore Insights</Link>
              </div>
            </div>
            {features.map((feature) => (
              <div className="col-12 col-md-6 col-lg-3 mb-4" key={feature.title}>
                <div className="single_feature feature_card_gradient home-feature-card">
                  <div className="single_feature_part">
                    <div className="iconContainer">
                      <img src={getAssetUrl(feature.image)} alt={feature.title} className="feature_gif" />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
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

      <section className="special_cource home-courses-section">
        <div className="container">
          <div className="home-section-heading text-center">
            <span className="home-kicker">Technical Courses</span>
            <h2>Industry-ready programs for practical growth</h2>
            <p>Choose a focused track and build a portfolio through guided projects, labs, and capstones.</p>
          </div>
          <div className="row">
            {courses.map((course) => {
              const lottieSrc = getLottieSrc(course.id);
              return (
                <div className="col-12 col-md-6 col-lg-4 mb-4" key={course.id}>
                  <div className="single_special_cource home-course-card">
                    {lottieSrc ? (
                      <div className="special_img lottie_home_card_wrap">
                        <LottiePlayer
                          src={getAssetUrl(lottieSrc)}
                          style={{ width: "100%", height: "200px", margin: "0 auto" }}
                        />
                      </div>
                    ) : (
                      <img
                        src={course.img.startsWith("data:") ? course.img : getAssetUrl(course.img)}
                        className="special_img"
                        alt={course.title}
                        onError={(e) => {
                          e.target.src = "/img/cource/AI_ML.jfif";
                        }}
                      />
                    )}
                    <div className="special_cource_text">
                      <Link to={`/course-details?id=${course.id}`} className="btn_4">{getCourseTag(course)}</Link>
                      <h3>
                        <Link to={`/course-details?id=${course.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                          {course.title}
                        </Link>
                      </h3>
                      <p>{course.shortDesc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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
            <h2>Learning beyond the classroom</h2>
            <p>Workshops, visits, guest lectures, challenges, and presentations give students real exposure.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {homepageActivities.map((activity) => (
              <div className="col-12 col-md-6 col-lg-4" key={activity.id}>
                <div className="activity_card home-activity-card">
                  {activity.type === "video" ? (
                    <video
                      controls
                      muted
                      className="activity_thumb"
                      src={activity.path.startsWith("data:") ? activity.path : getAssetUrl(activity.path)}
                      style={{ objectFit: "cover", height: "220px" }}
                    />
                  ) : (
                    <img
                      src={activity.path.startsWith("data:") ? activity.path : getAssetUrl(activity.path)}
                      className="activity_thumb"
                      alt={activity.title || "Student Activity"}
                      onError={(e) => {
                        e.target.src = "/img/activity/visits/3.webp";
                      }}
                    />
                  )}
                  <div className="activity_content_wrapper">
                    <h4>{activity.title || "Student Activity"}</h4>
                    <p style={{ textTransform: "uppercase", fontSize: "12px", fontWeight: "bold", color: "#3a77ff" }}>
                      {activity.category}
                    </p>
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
