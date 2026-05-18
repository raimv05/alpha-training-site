import React from "react";  
export default function CourseDetails() {
  const outline = ["Introduction Lesson", "Basics of HTML", "Getting Know about HTML", "Tags and Attributes", "Basics of CSS", "Getting Familiar with CSS", "Introduction to Bootstrap", "Responsive Design", "Canvas in HTML 5"];

  return (
    <>
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2>Course Details</h2>
                  <p>Home <span>/</span> Course Details</p>
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
                <div className="content">Build practical understanding through guided lessons, hands-on tasks, and real project work.</div>
                <h4 className="title">Eligibility</h4>
                <div className="content">Open to students and graduates who want to develop strong technical skills.</div>
                <h4 className="title">Course Outline</h4>
                <div className="content">
                  <ul className="course_list">
                    {outline.map((item) => (
                      <li className="justify-content-between align-items-center d-flex" key={item}>
                        <p>{item}</p><a className="btn_2 text-uppercase" href="#">View Details</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 right-contents">
              <div className="sidebar_top">
                <ul>
                  <li><a className="justify-content-between d-flex" href="#"><p>Trainer's Name</p><span className="color">George Mathews</span></a></li>
                  <li><a className="justify-content-between d-flex" href="#"><p>Available Seats</p><span>15</span></a></li>
                  <li><a className="justify-content-between d-flex" href="#"><p>Schedule</p><span>2.00 pm to 4.00 pm</span></a></li>
                </ul>
                <a href="/register" className="btn_1 d-block">Enroll the course</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
