import React, { useState, useEffect } from "react";
import { getAssetUrl } from "../utils/assets.js";
import LottiePlayer from "../components/LottiePlayer.jsx";

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
