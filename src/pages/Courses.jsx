import React from "react";
import { getAssetUrl } from "../utils/assets.js";
const courses = [
  {
    id: "ai",
    title: "AI & Machine Learning",
    shortDesc: "Master Machine Learning, Deep Learning, Neural Networks and AI model deployment with real-world industry projects.",
    teachingMethod: ["Hands-on, project-based learning", "Weekly AI model-building challenges", "Live case studies", "Real industry datasets", "1:1 mentorship support"],
    img: "/img/cource/AI_ML.jfif",
    durations: [
      ["45 Days Training", "Python for AI", "Intro to ML Algorithms", "Mini ML Projects", "Capstone ML Model"],
      ["3 Months Training", "Machine Learning + Deep Learning", "TensorFlow / PyTorch", "Real-time ML Projects", "ML Deployment"],
      ["6 Months Training", "Advanced AI + DL", "NLP + Computer Vision", "Full AI Pipeline", "Industry Projects + Internship"],
    ],
  },
  {
    id: "ds",
    title: "Data Science",
    shortDesc: "Become a job-ready Data Scientist with statistics, machine learning and full data lifecycle mastery.",
    teachingMethod: ["Case-study based teaching", "Hands-on Data Cleaning & Visualization", "ML algorithms explained practically"],
    img: "/img/cource/DS.jpg",
    durations: [
      ["45 Days Training", "Python + Statistics", "Exploratory Data Analysis", "Data Visualization"],
      ["3 Months Training", "Machine Learning Models", "Pandas + NumPy Mastery", "EDA + Dashboard Project"],
      ["6 Months Training", "ML + Deep Learning", "Big Data Tools", "End-to-End DS Capstone"],
    ],
  },
  {
    id: "da",
    title: "Data Analytics",
    shortDesc: "Learn data storytelling, BI dashboards, SQL mastery and business insights generation.",
    teachingMethod: ["Dashboard-driven learning", "Multiple BI tools exposure", "Real corporate datasets"],
    img: "/img/cource/DA.jfif",
    durations: [
      ["45 Days Training", "Excel + SQL Basics", "Data Cleaning", "Mini Dashboard"],
      ["3 Months Training", "Power BI + Tableau", "SQL Advanced", "Business Case Projects"],
      ["6 Months Training", "Advanced Analytics", "Forecasting Models", "Analytics Internship Project"],
    ],
  },
  {
    id: "fsd",
    title: "Full Stack Development (MERN)",
    shortDesc: "Become a full-stack engineer with React, Node.js, MongoDB, Firebase, APIs and deployment skills.",
    teachingMethod: ["Code-along sessions", "Weekly projects", "API-building challenges", "Industry project experience"],
    img: "/img/cource/FS.jpg",
    durations: [
      ["45 Days Training", "HTML/CSS/JS", "React Basics", "Mini Project"],
      ["3 Months Training", "React + Node.js", "Express API", "Full MERN Project"],
      ["6 Months Training", "Advanced MERN", "Microservices", "DevOps Basics", "Industry Capstone"],
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain Development",
    shortDesc: "Build decentralized applications on Ethereum, Solana, ICP and Aptos using Solidity and Rust.",
    teachingMethod: ["Hands-on smart contract writing", "Deploy on multiple blockchains", "DApp frontend integrations"],
    img: "/img/cource/Blockchain.jpg",
    durations: [
      ["45 Days Training", "Solidity Basics", "Smart Contracts", "Mini DApp"],
      ["3 Months Training", "Solidity + Rust", "ICP Canisters", "Aptos Move", "DApp Project"],
      ["6 Months Training", "Cross-chain development", "Security + Audits", "Production-grade DApps"],
    ],
  },
  {
    id: "cyber",
    title: "Cybersecurity & Ethical Hacking",
    shortDesc: "Learn modern cybersecurity, penetration testing, network attacks, defense mechanisms and professional tools.",
    teachingMethod: ["Lab-based training", "Simulation attacks & defenses", "Tools: Metasploit, BurpSuite, Wireshark"],
    img: "/img/cource/CB.jpg",
    durations: [
      ["45 Days Training", "Networking Basics", "Vulnerability Scanning"],
      ["3 Months Training", "Web App Pentesting", "Network Attacks", "Security Tools"],
      ["6 Months Training", "Cyber Defense", "Red vs Blue Team Training", "Major Security Project"],
    ],
  },
];

export default function Courses() {
  return (
    <>
      <section className="courses_page_hero">
        <div className="container text-center">
          <h2 className="hero_title">Our Courses</h2>
          <p className="hero_subtitle">Industry-aligned, practical, job-oriented training programs.</p>
        </div>
      </section>
      {courses.map((course, index) => (
        <section className="course_section" id={course.id} key={course.id}>
          <div className="container">
            <div className={`course_flex_box ${index % 2 === 1 ? "reverse" : ""}`}>
              <div className="course_left_column">
                <div className="left_text_block">
                  <h2 className="course_title">{course.title}</h2>
                  <p className="course_desc">{course.shortDesc}</p>
                  <h4 className="sub_heading">Teaching Methodology</h4>
                  <ul className="teaching_list">
                    {course.teachingMethod.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div className="course_img_wrap">
                  <img src={getAssetUrl(course.img)} alt={course.title} className="course_main_img" />
                </div>
              </div>
              <div className="course_right_column">
                <h4 className="sub_heading">Training Duration Options</h4>
                <div className="duration_column">
                  {course.durations.map(([type, ...details]) => (
                    <div className="duration_card" key={type}>
                      <h5>{type}</h5>
                      <ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
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
