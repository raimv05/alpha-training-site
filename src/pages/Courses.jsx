import React from "react";
import { Link } from "react-router-dom";
import { getAssetUrl } from "../utils/assets.js";
import LottiePlayer from "../components/LottiePlayer.jsx";
import { useData } from "../context/DataContext.jsx";

export default function Courses() {
  const { courses } = useData();

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

  return (
    <>
      <section className="courses_page_hero">
        <div className="container text-center">
          <h2 className="hero_title">Our Courses</h2>
          <p className="hero_subtitle">Industry-aligned, practical, job-oriented training programs.</p>
        </div>
      </section>
      {courses.map((course, index) => {
        const lottieSrc = getLottieSrc(course.id);
        return (
          <section className="course_section" id={course.id} key={course.id}>
            <div className="container">
              <div className={`course_flex_box ${index % 2 === 1 ? "reverse" : ""}`}>
                <div className="course_left_column">
                  <div className="left_text_block">
                    <h2 className="course_title">
                      <Link to={`/course-details?id=${course.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                        {course.title}
                      </Link>
                    </h2>
                    <p className="course_desc">{course.shortDesc}</p>
                    <h4 className="sub_heading">Teaching Methodology</h4>
                    <ul className="teaching_list">
                      {course.teachingMethod && course.teachingMethod.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div className={`course_img_wrap ${lottieSrc ? "lottie_card_wrap" : ""}`}>
                    {lottieSrc ? (
                      <LottiePlayer
                        src={getAssetUrl(lottieSrc)}
                        style={{ width: "100%", height: "280px", margin: "0 auto" }}
                      />
                    ) : (
                      <img
                        src={course.img.startsWith("data:") ? course.img : getAssetUrl(course.img)}
                        alt={course.title}
                        className="course_main_img"
                        onError={(e) => {
                          e.target.src = "/img/cource/AI_ML.jfif";
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="course_right_column">
                  <h4 className="sub_heading">Training Duration Options</h4>
                  <div className="duration_column">
                    {course.durations && course.durations.map(([type, ...details]) => (
                      <div className="duration_card" key={type}>
                        <h5>{type}</h5>
                        <ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                        <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                          <Link
                            to={`/course-details?id=${course.id}`}
                            className="enroll_btn text-center text-decoration-none"
                            style={{
                              flex: 1,
                              background: "rgba(58, 119, 255, 0.1)",
                              color: "#3a77ff",
                              border: "1px solid rgba(58, 119, 255, 0.15)"
                            }}
                          >
                            Syllabus
                          </Link>
                          <Link to="/register" className="enroll_btn text-center text-decoration-none" style={{ flex: 1 }}>
                            Enroll
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
