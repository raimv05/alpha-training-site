import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useData } from "../context/DataContext.jsx";

export default function CourseDetails() {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("id");
  const { courses } = useData();

  // Find selected course, default to first if none matches
  const course = courses.find((c) => c.id === courseId) || courses[0];

  const [activeDurationIdx, setActiveDurationIdx] = useState(0);

  if (!course) {
    return (
      <div className="container" style={{ padding: "180px 0 100px", textAlign: "center" }}>
        <h2>Course Not Found</h2>
        <p>The selected course program does not exist or has been removed.</p>
        <Link to="/courses" className="btn_1 mt-3">Back to Courses</Link>
      </div>
    );
  }

  // Get active duration syllabus
  const activeDuration = course.durations[activeDurationIdx] || course.durations[0] || ["Training Block", "Curriculum outline loading"];
  const durationTitle = activeDuration[0];
  const syllabusPoints = activeDuration.slice(1);

  // Custom static fields helper based on course
  const getTrainerName = (id) => {
    switch (id) {
      case "ai": return "George Mathews (AI Engineer)";
      case "ds": return "Dr. Amit Sharma (Data Scientist)";
      case "da": return "Neha Kapoor (Lead Analyst)";
      case "fsd": return "Rohit Verma (Full Stack Architect)";
      case "blockchain": return "Vikram Singh (Web3 Engineer)";
      case "cyber": return "Sanjay Dutt (Security Expert)";
      default: return "Alpha IT Senior Specialist";
    }
  };

  const getSchedule = (id) => {
    switch (id) {
      case "ai": return "2.00 pm to 4.00 pm";
      case "ds": return "10.00 am to 12.00 pm";
      case "da": return "4.00 pm to 6.00 pm";
      case "fsd": return "11.00 am to 1.00 pm";
      case "blockchain": return "3.00 pm to 5.00 pm";
      case "cyber": return "9.00 am to 11.00 am";
      default: return "Flexible timings";
    }
  };

  return (
    <>
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2>{course.title} Details</h2>
                  <p>Home <span>/</span> Courses <span>/</span> Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="course_details_area section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 course_details_left">
              <div className="content_wrapper">
                <h4 className="title_top">Objectives</h4>
                <div className="content">
                  {course.shortDesc}
                  <br />
                  Learn practical, industry-standard skill workflows using real-world datasets, hands-on debugging, and expert mentorship.
                </div>
                
                <h4 className="title">Eligibility</h4>
                <div className="content">
                  Open to students, engineering graduates, and professionals who want to develop strong job-ready technical skills in {course.title}.
                </div>

                <h4 className="title">Teaching Methodology</h4>
                <div className="content mb-4">
                  <ul className="course_list" style={{ border: "none" }}>
                    {course.teachingMethod && course.teachingMethod.map((item, idx) => (
                      <li className="d-flex align-items-center" style={{ borderBottom: "none", padding: "6px 0" }} key={idx}>
                        <span className="ti-check-box" style={{ color: "#3a77ff", marginRight: "10px" }} />
                        <p style={{ margin: 0 }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid rgba(58,119,255,0.1)", paddingBottom: "10px" }}>
                  <h4 className="title" style={{ borderBottom: "none", margin: 0 }}>Course Syllabus Outline</h4>
                  
                  {/* Duration selection tabs */}
                  <div style={{ display: "flex", gap: "8px" }}>
                    {course.durations.map(([title], idx) => (
                      <button
                        key={title}
                        onClick={() => setActiveDurationIdx(idx)}
                        style={{
                          padding: "6px 12px",
                          borderRadius: "4px",
                          fontSize: "12px",
                          fontWeight: "700",
                          cursor: "pointer",
                          border: activeDurationIdx === idx ? "1px solid #3a77ff" : "1px solid rgba(0,0,0,0.15)",
                          backgroundColor: activeDurationIdx === idx ? "#3a77ff" : "transparent",
                          color: activeDurationIdx === idx ? "#fff" : "inherit",
                          transition: "all 0.2s"
                        }}
                      >
                        {title.split(" ")[0]} {title.split(" ")[1]}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="content mt-3">
                  <h5 style={{ fontWeight: "700", color: "#3a77ff", marginBottom: "15px" }}>
                    🎯 Syllabus for {durationTitle}
                  </h5>
                  <ul className="course_list">
                    {syllabusPoints.map((item) => (
                      <li className="justify-content-between align-items-center d-flex" key={item}>
                        <p>{item}</p>
                        <Link className="btn_2 text-uppercase" to="/register">Register</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 right-contents">
              <div className="sidebar_top">
                <ul>
                  <li>
                    <div className="justify-content-between d-flex">
                      <p>Trainer's Name</p>
                      <span className="color">{getTrainerName(course.id)}</span>
                    </div>
                  </li>
                  <li>
                    <div className="justify-content-between d-flex">
                      <p>Available Seats</p>
                      <span>15 Positions</span>
                    </div>
                  </li>
                  <li>
                    <div className="justify-content-between d-flex">
                      <p>Schedule</p>
                      <span>{getSchedule(course.id)}</span>
                    </div>
                  </li>
                </ul>
                <Link to="/register" className="btn_1 d-block text-center text-decoration-none">Enroll the course</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
