import { Link } from "react-router-dom";
import Testimonials2 from "../components/Testimonials_2";
import { getAssetUrl } from "../utils/assets.js";

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

const courses = [
  {
    title: "AI & Machine Learning",
    image: "/img/cource/AI_ML.jfif",
    desc: "Learn ML algorithms, deep learning, neural networks, and model deployment using real-world datasets.",
    tag: "AI & Machine Learning",
  },
  {
    title: "Data Science",
    image: "/img/cource/DS.jpg",
    desc: "Master statistics, machine learning, EDA, dashboards, and business decision-making through projects.",
    tag: "Data Science",
  },
  {
    title: "Data Analytics",
    image: "/img/cource/DA.jfif",
    desc: "Learn Excel, SQL, Power BI, Tableau, data cleaning, and reporting with industry case studies.",
    tag: "Data Analytics",
  },
  {
    title: "MERN Full Stack Development",
    image: "/img/cource/FS.jpg",
    desc: "Build complete web applications using React, Node.js, Express, MongoDB, APIs, and deployment.",
    tag: "Full Stack",
  },
  {
    title: "Blockchain & Web3 Development",
    image: "/img/cource/Blockchain.jpg",
    desc: "Learn Solidity, Web3.js, smart contracts, DApps, ICP, Aptos, and blockchain project workflows.",
    tag: "Blockchain",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    image: "/img/cource/CB.jpg",
    desc: "Learn penetration testing, security tools, network hardening, red teaming, and cyber defense.",
    tag: "Cybersecurity",
  },
];

const activities = [
  {
    title: "Hands-On Workshop - Full Stack Development",
    image: "/img/activity/gif8-ezgif.com-gif-maker.gif",
    text: "Live coding sessions with industry experts covering web development and cloud tools.",
  },
  {
    title: "Hands-On Workshop - AI & Machine Learning",
    image: "/img/activity/modified-generative-gif.gif",
    text: "Students build practical models, explore datasets, and learn AI workflows through guided labs.",
  },
  {
    title: "Guest Lecture - Industry Leaders Talk",
    image: "/img/activity/male-speaker-addresses-media-press-conference-standing-behind-podium-multiple-microphones-scene-represents-359623480-ezgif.com-gif-maker.webp",
    text: "Professionals from top companies share career roadmaps, project stories, and interview guidance.",
  },
  {
    title: "Hackathons & Coding Challenges",
    image: "/img/activity/images-ezgif.com-gif-maker.gif",
    text: "Students compete, collaborate, and build innovative solutions in real-time challenges.",
  },
  {
    title: "Placement & Mock Interviews",
    image: "/img/activity/Untitled-design-3-ezgif.com-gif-maker.gif",
    text: "HR sessions, mock technical interviews, and resume-building for job readiness.",
  },
  {
    title: "Team Projects & Presentations",
    image: "/img/activity/presentation-office-work-ezgif.com-gif-maker.gif",
    text: "Students showcase their work through team-driven real IT project demos.",
  },
];

const stats = [
  ["6+", "Career Tracks"],
  ["45 Days", "Fast-Track Options"],
  ["3-6 Months", "Deep Training"],
  ["100%", "Project-Based"],
];

export default function Home() {
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
            {courses.map((course) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={course.title}>
                <div className="single_special_cource home-course-card">
                  <img src={getAssetUrl(course.image)} className="special_img" alt={course.title} />
                  <div className="special_cource_text">
                    <Link to="/courses" className="btn_4">{course.tag}</Link>
                    <h3>{course.title}</h3>
                    <p>{course.desc}</p>
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
            <h2>Learning beyond the classroom</h2>
            <p>Workshops, visits, guest lectures, challenges, and presentations give students real exposure.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {activities.map((activity) => (
              <div className="col-12 col-md-6 col-lg-4" key={activity.title}>
                <div className="activity_card home-activity-card">
                  <img src={getAssetUrl(activity.image)} className="activity_thumb" alt={activity.title} />
                  <div className="activity_content_wrapper">
                    <h4>{activity.title}</h4>
                    <p>{activity.text}</p>
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
