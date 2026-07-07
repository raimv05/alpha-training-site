import React, { useState, useEffect } from "react";
import { getAssetUrl } from "../utils/assets.js";
import LottiePlayer from "../components/LottiePlayer.jsx";

// const courses = [
//   {
//     id: "ai",
//     title: "AI & Machine Learning",
//     shortDesc: "Master Machine Learning, Deep Learning, Neural Networks and AI model deployment with real-world industry projects.",
//     teachingMethod: ["Hands-on, project-based learning", "Weekly AI model-building challenges", "Live case studies", "Real industry datasets", "1:1 mentorship support"],
//     img: "/img/cource/AI_ML.jfif",
//     durations: [
//       ["45 Days Training", "Python for AI", "Intro to ML Algorithms", "Mini ML Projects", "Capstone ML Model"],
//       ["3 Months Training", "Machine Learning + Deep Learning", "TensorFlow / PyTorch", "Real-time ML Projects", "ML Deployment"],
//       ["6 Months Training", "Advanced AI + DL", "NLP + Computer Vision", "Full AI Pipeline", "Industry Projects + Internship"],
//     ],
//   },
//   {
//     id: "ds",
//     title: "Data Science",
//     shortDesc: "Become a job-ready Data Scientist with statistics, machine learning and full data lifecycle mastery.",
//     teachingMethod: ["Case-study based teaching", "Hands-on Data Cleaning & Visualization", "ML algorithms explained practically"],
//     img: "/img/cource/DS.jpg",
//     durations: [
//       ["45 Days Training", "Python + Statistics", "Exploratory Data Analysis", "Data Visualization"],
//       ["3 Months Training", "Machine Learning Models", "Pandas + NumPy Mastery", "EDA + Dashboard Project"],
//       ["6 Months Training", "ML + Deep Learning", "Big Data Tools", "End-to-End DS Capstone"],
//     ],
//   },
//   {
//     id: "da",
//     title: "Data Analytics",
//     shortDesc: "Learn data storytelling, BI dashboards, SQL mastery and business insights generation.",
//     teachingMethod: ["Dashboard-driven learning", "Multiple BI tools exposure", "Real corporate datasets"],
//     img: "/img/cource/DA.jfif",
//     durations: [
//       ["45 Days Training", "Excel + SQL Basics", "Data Cleaning", "Mini Dashboard"],
//       ["3 Months Training", "Power BI + Tableau", "SQL Advanced", "Business Case Projects"],
//       ["6 Months Training", "Advanced Analytics", "Forecasting Models", "Analytics Internship Project"],
//     ],
//   },
//   {
//     id: "fsd",
//     title: "Full Stack Development (MERN)",
//     shortDesc: "Become a full-stack engineer with React, Node.js, MongoDB, Firebase, APIs and deployment skills.",
//     teachingMethod: ["Code-along sessions", "Weekly projects", "API-building challenges", "Industry project experience"],
//     img: "/img/cource/FS.jpg",
//     durations: [
//       ["45 Days Training", "HTML/CSS/JS", "React Basics", "Mini Project"],
//       ["3 Months Training", "React + Node.js", "Express API", "Full MERN Project"],
//       ["6 Months Training", "Advanced MERN", "Microservices", "DevOps Basics", "Industry Capstone"],
//     ],
//   },
//   {
//     id: "blockchain",
//     title: "Blockchain Development",
//     shortDesc: "Build decentralized applications on Ethereum, Solana, ICP and Aptos using Solidity and Rust.",
//     teachingMethod: ["Hands-on smart contract writing", "Deploy on multiple blockchains", "DApp frontend integrations"],
//     img: "/img/cource/Blockchain.jpg",
//     durations: [
//       ["45 Days Training", "Solidity Basics", "Smart Contracts", "Mini DApp"],
//       ["3 Months Training", "Solidity + Rust", "ICP Canisters", "Aptos Move", "DApp Project"],
//       ["6 Months Training", "Cross-chain development", "Security + Audits", "Production-grade DApps"],
//     ],
//   },
//   {
//     id: "cyber",
//     title: "Cybersecurity & Ethical Hacking",
//     shortDesc: "Learn modern cybersecurity, penetration testing, network attacks, defense mechanisms and professional tools.",
//     teachingMethod: ["Lab-based training", "Simulation attacks & defenses", "Tools: Metasploit, BurpSuite, Wireshark"],
//     img: "/img/cource/CB.jpg",
//     durations: [
//       ["45 Days Training", "Networking Basics", "Vulnerability Scanning"],
//       ["3 Months Training", "Web App Pentesting", "Network Attacks", "Security Tools"],
//       ["6 Months Training", "Cyber Defense", "Red vs Blue Team Training", "Major Security Project"],
//     ],
//   },
// ];

export default function Courses() {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("https://alphaitms.com/wp-json/training/v1/courses");
      const data = await response.json();
      setCourses(data);
    };
    fetchCourses();
  }, []);
  return (
    <>
      <section className="courses_page_hero">
        <div className="container text-center">
          <h2 className="hero_title">{courses?.courses_heading}</h2>
          <p className="hero_subtitle">{courses?.courses_text}</p>
        </div>
      </section>
      {courses?.courses?.map((course, index) => (
        <section className="course_section" id={course.title} key={course.title}>
          <div className="container">
            <div className={`course_flex_box ${index % 2 === 1 ? "reverse" : ""}`}>
              <div className="course_left_column">
                <div className="left_text_block">
                  <h2 className="course_title">{course.title}</h2>
                  <p className="course_desc">{course.description}</p>
                  <h4 className="sub_heading">Teaching Methodology</h4>
                  <ul className="teaching_list">
                    {course.teaching_method?.map((item) => <li key={item.method}>{item.method}</li>)}
                  </ul>
                </div>
                <div className={`course_img_wrap ${(course.title === "AI & Machine Learning" || course.title === "Data Science" || course.title === "Data Analytics" || course.title === "Full Stack Development (MERN)" || course.title === "Blockchain Development" || course.title === "Cybersecurity & Ethical Hacking") ? "lottie_card_wrap" : ""}`}>
                  {course.title === "AI & Machine Learning" ? (
                    <LottiePlayer
                      src={getAssetUrl("/ai-lottie.json")}
                      style={{ width: "100%", height: "280px", margin: "0 auto" }}
                    />
                  ) : course.title === "Data Science" ? (
                    <LottiePlayer
                      src={getAssetUrl("/ds-lottie.json")}
                      style={{ width: "100%", height: "280px", margin: "0 auto" }}
                    />
                  ) : course.title === "Data Analytics" ? (
                    <LottiePlayer
                      src={getAssetUrl("/dashboard-lottie.json")}
                      style={{ width: "100%", height: "280px", margin: "0 auto" }}
                    />
                  ) : course.title === "Full Stack Development (MERN)" ? (
                    <LottiePlayer
                      src={getAssetUrl("/fs-lottie.json")}
                      style={{ width: "100%", height: "280px", margin: "0 auto" }}
                    />
                  ) : course.title === "Blockchain Development" ? (
                    <LottiePlayer
                      src={getAssetUrl("/blockchain-lottie.json")}
                      style={{ width: "100%", height: "280px", margin: "0 auto" }}
                    />
                  ) : course.title === "Cybersecurity & Ethical Hacking" ? (
                    <LottiePlayer
                      src={getAssetUrl("/cyber-lottie.json")}
                      style={{ width: "100%", height: "280px", margin: "0 auto" }}
                    />
                  ) : course.image ? (
                    <img src={course.image} alt={course.title} className="course_main_img" />
                  ) : null}
                </div>
              </div>
              <div className="course_right_column">
                <h4 className="sub_heading">Training Duration Options</h4>
                <div className="duration_column">
                  {course.durations?.map((duration) => (
                    <div className="duration_card" key={duration.number_of_days}>
                      <h5>{duration.number_of_days}</h5>
                      <ul>
                        {duration.all_topics?.map((topic) => (
                          <li key={topic.topic}>{topic.topic}</li>
                        ))}
                      </ul>
                      <a href="/register" className="enroll_btn">Enroll Now</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
