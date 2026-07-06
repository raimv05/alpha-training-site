import React, { useState, useEffect } from "react";
import { useData } from "../context/DataContext.jsx";
import { useDarkMode } from "../context/DarkModeContext.jsx";
import "./Admin.css";

export default function Admin() {
  const { darkMode } = useDarkMode();
  const {
    courses,
    activities,
    testimonials,
    addCourse,
    updateCourse,
    deleteCourse,
    addActivity,
    updateActivity,
    deleteActivity,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
  } = useData();

  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem("alpha-admin-logged") === "true";
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Dashboard Navigation
  const [activeTab, setActiveTab] = useState("courses"); // 'courses' | 'activities' | 'testimonials'

  // Modal control
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // 'course' | 'activity' | 'testimonial'
  const [editingId, setEditingId] = useState(null); // null if adding new

  // Form States
  // 1. Course Form
  const [courseId, setCourseId] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseShortDesc, setCourseShortDesc] = useState("");
  const [courseImg, setCourseImg] = useState("");
  const [courseMethods, setCourseMethods] = useState([""]);
  const [courseDurations, setCourseDurations] = useState([
    { title: "", points: [""] }
  ]);

  // 2. Activity Form
  const [actTitle, setActTitle] = useState("");
  const [actCategory, setActCategory] = useState("Industrial Visits");
  const [actType, setActType] = useState("image"); // 'image' | 'video'
  const [actPath, setActPath] = useState("");

  // 3. Testimonial Form
  const [testName, setTestName] = useState("");
  const [testTitle, setTestTitle] = useState("");
  const [testLocation, setTestLocation] = useState("");
  const [testAvatar, setTestAvatar] = useState("");
  const [testText, setTestText] = useState("");
  const [testRating, setTestRating] = useState(5);
  const [testCategory, setTestCategory] = useState("QA");

  // General Notification Alert
  const [alertMsg, setAlertMsg] = useState("");

  const triggerAlert = (msg) => {
    setAlertMsg(msg);
    setTimeout(() => setAlertMsg(""), 3000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.toLowerCase() === "admin" && password === "alpha-admin-2026") {
      sessionStorage.setItem("alpha-admin-logged", "true");
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials. Try again.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("alpha-admin-logged");
    setIsLoggedIn(false);
  };

  // Convert files to base64 helper
  const handleFileUpload = (e, setFileState) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFileState(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Modals Actions
  const openAddModal = (type) => {
    setEditingId(null);
    setModalType(type);
    setIsModalOpen(true);

    if (type === "course") {
      setCourseId("");
      setCourseTitle("");
      setCourseShortDesc("");
      setCourseImg("");
      setCourseMethods([""]);
      setCourseDurations([{ title: "45 Days Training", points: [""] }]);
    } else if (type === "activity") {
      setActTitle("");
      setActCategory("Industrial Visits");
      setActType("image");
      setActPath("");
    } else if (type === "testimonial") {
      setTestName("");
      setTestTitle("");
      setTestLocation("");
      setTestAvatar("");
      setTestText("");
      setTestRating(5);
      setTestCategory("QA");
    }
  };

  const openEditModal = (type, item) => {
    setEditingId(item.id);
    setModalType(type);
    setIsModalOpen(true);

    if (type === "course") {
      setCourseId(item.id);
      setCourseTitle(item.title);
      setCourseShortDesc(item.shortDesc);
      setCourseImg(item.img || "");
      setCourseMethods(item.teachingMethod || [""]);
      
      // Parse durations format back to structural objects
      const parsedDurations = item.durations.map(([title, ...points]) => ({
        title,
        points: points.length > 0 ? points : [""]
      }));
      setCourseDurations(parsedDurations);
    } else if (type === "activity") {
      setActTitle(item.title || "");
      setActCategory(item.category);
      setActType(item.type);
      setActPath(item.path);
    } else if (type === "testimonial") {
      setTestName(item.clientName);
      setTestTitle(item.clientTitle);
      setTestLocation(item.clientLocation);
      setTestAvatar(item.clientAvatar || "");
      setTestText(item.testimonialText);
      setTestRating(item.rating);
      setTestCategory(item.category);
    }
  };

  // CRUD Saves
  const handleSave = (e) => {
    e.preventDefault();

    if (modalType === "course") {
      // Validate
      if (!courseId || !courseTitle || !courseShortDesc) {
        alert("Please fill in course ID, title, and short description.");
        return;
      }
      
      const cleanMethods = courseMethods.filter((m) => m.trim() !== "");
      const cleanDurations = courseDurations.map((d) => [
        d.title.trim(),
        ...d.points.filter((pt) => pt.trim() !== "")
      ]).filter(([title]) => title !== "");

      const courseData = {
        id: courseId.trim().toLowerCase().replace(/\s+/g, "-"),
        title: courseTitle,
        shortDesc: courseShortDesc,
        img: courseImg || "/img/cource/AI_ML.jfif",
        teachingMethod: cleanMethods.length > 0 ? cleanMethods : ["Project-based training"],
        durations: cleanDurations.length > 0 ? cleanDurations : [["45 Days Training", "Core Curriculum"]]
      };

      if (editingId) {
        updateCourse(editingId, courseData);
        triggerAlert("Course updated successfully!");
      } else {
        // Prevent duplicate IDs
        if (courses.some(c => c.id === courseData.id)) {
          alert("A course with this ID already exists. Please choose a unique ID.");
          return;
        }
        addCourse(courseData);
        triggerAlert("Course added successfully!");
      }

    } else if (modalType === "activity") {
      if (!actPath) {
        alert("Please upload an image/video or enter a media path URL.");
        return;
      }

      const activityData = {
        title: actTitle,
        category: actCategory,
        type: actType,
        path: actPath
      };

      if (editingId) {
        updateActivity(editingId, activityData);
        triggerAlert("Activity updated successfully!");
      } else {
        addActivity(activityData);
        triggerAlert("Activity added successfully!");
      }

    } else if (modalType === "testimonial") {
      if (!testName || !testTitle || !testText) {
        alert("Please fill in student name, role/title, and review text.");
        return;
      }

      const testimonialData = {
        companyLogo: "/img/logo-cropped.png",
        clientName: testName,
        clientTitle: testTitle,
        clientLocation: testLocation || "Chandigarh, India",
        clientAvatar: testAvatar || "/img/testimonials/1.jpeg",
        testimonialText: testText,
        rating: Number(testRating),
        category: testCategory
      };

      if (editingId) {
        updateTestimonial(editingId, testimonialData);
        triggerAlert("Testimonial updated successfully!");
      } else {
        addTestimonial(testimonialData);
        triggerAlert("Testimonial added successfully!");
      }
    }

    setIsModalOpen(false);
  };

  // Helper builders for Course methods list
  const addMethodField = () => setCourseMethods([...courseMethods, ""]);
  const removeMethodField = (index) => {
    setCourseMethods(courseMethods.filter((_, idx) => idx !== index));
  };
  const updateMethodField = (index, val) => {
    const updated = [...courseMethods];
    updated[index] = val;
    setCourseMethods(updated);
  };

  // Helper builders for Course durations list
  const addDurationBlock = () => {
    setCourseDurations([...courseDurations, { title: "", points: [""] }]);
  };
  const removeDurationBlock = (index) => {
    setCourseDurations(courseDurations.filter((_, idx) => idx !== index));
  };
  const updateDurationTitle = (index, val) => {
    const updated = [...courseDurations];
    updated[index].title = val;
    setCourseDurations(updated);
  };
  const addDurationPoint = (durationIndex) => {
    const updated = [...courseDurations];
    updated[durationIndex].points.push("");
    setCourseDurations(updated);
  };
  const removeDurationPoint = (durationIndex, pointIndex) => {
    const updated = [...courseDurations];
    updated[durationIndex].points = updated[durationIndex].points.filter(
      (_, pIdx) => pIdx !== pointIndex
    );
    setCourseDurations(updated);
  };
  const updateDurationPointValue = (durationIndex, pointIndex, val) => {
    const updated = [...courseDurations];
    updated[durationIndex].points[pointIndex] = val;
    setCourseDurations(updated);
  };

  // Render Login view
  if (!isLoggedIn) {
    return (
      <div className="admin-page-wrapper">
        <div className="admin-container">
          <div className="admin-card admin-login-card animate-form">
            <img src="/img/logo.png" className="form-logo" style={{ maxHeight: "60px", marginBottom: "20px" }} alt="Alpha IT Logo" />
            <h2>Admin Control Panel</h2>
            <p>Please enter administrator login credentials to manage website dynamic content.</p>
            {loginError && <div style={{ color: "#ef4444", marginBottom: "15px", fontWeight: "600" }}>{loginError}</div>}
            
            <form onSubmit={handleLogin}>
              <div className="admin-input-group">
                <i className="ti-user" />
                <input
                  type="text"
                  placeholder="Username"
                  className="input-field"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="admin-input-group">
                <i className="ti-lock" />
                <input
                  type="password"
                  placeholder="Passcode"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Verify Credentials</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page-wrapper">
      {alertMsg && <div className="admin-alert">{alertMsg}</div>}

      <div className="admin-container">
        {/* Dashboard Header */}
        <div className="admin-card admin-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p style={{ margin: 0, color: "#64748b" }}>Manage course listings, student activities, and placements reviews</p>
          </div>
          <div className="admin-actions">
            <button className="logout-btn" onClick={handleLogout}>
              <i className="ti-power-off" /> Logout
            </button>
          </div>
        </div>

        {/* Dynamic Stats Stripe */}
        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <div className="stat-icon-wrapper"><i className="ti-book" /></div>
            <div className="stat-info">
              <h3>Total Courses</h3>
              <p>{courses.length}</p>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="stat-icon-wrapper"><i className="ti-gallery" /></div>
            <div className="stat-info">
              <h3>Activities Files</h3>
              <p>{activities.length}</p>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="stat-icon-wrapper"><i className="ti-comments" /></div>
            <div className="stat-info">
              <h3>Reviews Count</h3>
              <p>{testimonials.length}</p>
            </div>
          </div>
        </div>

        {/* Tab Menu Navigation */}
        <div className="admin-tabs">
          <button
            className={`admin-tab-btn ${activeTab === "courses" ? "active" : ""}`}
            onClick={() => setActiveTab("courses")}
          >
            📋 Courses Program
          </button>
          <button
            className={`admin-tab-btn ${activeTab === "activities" ? "active" : ""}`}
            onClick={() => setActiveTab("activities")}
          >
            📸 Student Activities
          </button>
          <button
            className={`admin-tab-btn ${activeTab === "testimonials" ? "active" : ""}`}
            onClick={() => setActiveTab("testimonials")}
          >
            ⭐ Placement Testimonials
          </button>
        </div>

        {/* Tab Panel contents */}
        {activeTab === "courses" && (
          <div className="admin-card">
            <div className="table-header-row">
              <h2>Courses Available</h2>
              <button className="add-btn" onClick={() => openAddModal("course")}>
                <span className="ti-plus" /> Add Course Listing
              </button>
            </div>

            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Icon/Cover</th>
                    <th>Course Code / ID</th>
                    <th>Course Title</th>
                    <th>Short Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id}>
                      <td>
                        <img
                          src={course.img.startsWith("data:") ? course.img : course.img}
                          className="item-thumb"
                          alt={course.title}
                          onError={(e) => {
                            e.target.src = "/img/cource/AI_ML.jfif";
                          }}
                        />
                      </td>
                      <td><code>{course.id}</code></td>
                      <td style={{ fontWeight: "700" }}>{course.title}</td>
                      <td>{course.shortDesc.slice(0, 75)}...</td>
                      <td>
                        <div className="action-buttons">
                          <button
                            className="edit-action-btn"
                            title="Edit"
                            onClick={() => openEditModal("course", course)}
                          >
                            ✏️
                          </button>
                          <button
                            className="delete-action-btn"
                            title="Delete"
                            onClick={() => {
                              if (window.confirm(`Are you sure you want to delete "${course.title}"?`)) {
                                deleteCourse(course.id);
                                triggerAlert("Course deleted successfully!");
                              }
                            }}
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "activities" && (
          <div className="admin-card">
            <div className="table-header-row">
              <h2>Activities Media Files</h2>
              <button className="add-btn" onClick={() => openAddModal("activity")}>
                <span className="ti-plus" /> Add Activities Media
              </button>
            </div>

            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Preview</th>
                    <th>Category Tab</th>
                    <th>Media Type</th>
                    <th>Caption Title</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((act) => (
                    <tr key={act.id}>
                      <td>
                        {act.type === "video" ? (
                          <div
                            className="item-thumb"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: "#0e1f4d",
                              color: "#fff",
                              fontSize: "12px",
                              fontWeight: "bold",
                              borderRadius: "6px"
                            }}
                          >
                            MP4
                          </div>
                        ) : (
                          <img
                            src={act.path}
                            className="item-thumb"
                            alt={act.title || "Activity"}
                            onError={(e) => {
                              e.target.src = "/img/activity/visits/3.webp";
                            }}
                          />
                        )}
                      </td>
                      <td><span className="category-tag">{act.category}</span></td>
                      <td style={{ textTransform: "capitalize" }}>{act.type}</td>
                      <td>{act.title || "(Untitled Media)"}</td>
                      <td>
                        <div className="action-buttons">
                          <button
                            className="edit-action-btn"
                            title="Edit"
                            onClick={() => openEditModal("activity", act)}
                          >
                            ✏️
                          </button>
                          <button
                            className="delete-action-btn"
                            title="Delete"
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this activity media?")) {
                                deleteActivity(act.id);
                                triggerAlert("Activity deleted successfully!");
                              }
                            }}
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "testimonials" && (
          <div className="admin-card">
            <div className="table-header-row">
              <h2>Placement Testimonials</h2>
              <button className="add-btn" onClick={() => openAddModal("testimonial")}>
                <span className="ti-plus" /> Add Testimonial Review
              </button>
            </div>

            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Avatar</th>
                    <th>Student Name</th>
                    <th>Designation / Role</th>
                    <th>Company / Location</th>
                    <th>Rating</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {testimonials.map((test) => (
                    <tr key={test.id}>
                      <td>
                        <img
                          src={test.clientAvatar}
                          className="item-thumb"
                          style={{ borderRadius: "50%" }}
                          alt={test.clientName}
                          onError={(e) => {
                            e.target.src = "/img/testimonials/1.jpeg";
                          }}
                        />
                      </td>
                      <td style={{ fontWeight: "700" }}>{test.clientName}</td>
                      <td>{test.clientTitle}</td>
                      <td>{test.clientLocation}</td>
                      <td style={{ color: "#f59e0b", fontWeight: "bold" }}>{"★".repeat(test.rating)}</td>
                      <td><span className="category-tag" style={{ background: "rgba(58, 119, 255, 0.1)", color: "#3a77ff" }}>{test.category}</span></td>
                      <td>
                        <div className="action-buttons">
                          <button
                            className="edit-action-btn"
                            title="Edit"
                            onClick={() => openEditModal("testimonial", test)}
                          >
                            ✏️
                          </button>
                          <button
                            className="delete-action-btn"
                            title="Delete"
                            onClick={() => {
                              if (window.confirm(`Are you sure you want to delete testimonial from "${test.clientName}"?`)) {
                                deleteTestimonial(test.id);
                                triggerAlert("Testimonial deleted successfully!");
                              }
                            }}
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* CRUD Overlay Modals */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {editingId ? "✏️ Edit" : "➕ Add New"}{" "}
                {modalType === "course" && "Course listing"}
                {modalType === "activity" && "Activity media file"}
                {modalType === "testimonial" && "Placement Testimonial"}
              </h3>
              <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSave}>
              <div className="modal-body">
                {/* 1. COURSE FORM LAYOUT */}
                {modalType === "course" && (
                  <>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Course Slug / URL ID <span style={{ color: "#ef4444" }}>*</span></label>
                        <input
                          type="text"
                          className="form-control-input"
                          placeholder="e.g. mern-stack"
                          value={courseId}
                          onChange={(e) => setCourseId(e.target.value)}
                          disabled={!!editingId}
                          required
                        />
                        <small style={{ color: "#64748b" }}>URL safe name containing only letters, numbers, and dashes.</small>
                      </div>
                      <div className="form-group">
                        <label>Course Title <span style={{ color: "#ef4444" }}>*</span></label>
                        <input
                          type="text"
                          className="form-control-input"
                          placeholder="e.g. MERN Full Stack Development"
                          value={courseTitle}
                          onChange={(e) => setCourseTitle(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Short Description <span style={{ color: "#ef4444" }}>*</span></label>
                      <textarea
                        className="form-control-input"
                        placeholder="Provide a clear, brief overview of the training path..."
                        value={courseShortDesc}
                        onChange={(e) => setCourseShortDesc(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Course Cover Illustration Image</label>
                      <div className="file-upload-wrapper">
                        <div className="file-preview-wrap">
                          {courseImg ? (
                            <img src={courseImg} className="file-preview-img" alt="Cover" />
                          ) : (
                            <span style={{ fontSize: "20px" }}>🖼️</span>
                          )}
                        </div>
                        <div className="file-input-btn">
                          Choose Image File
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(e, setCourseImg)}
                          />
                        </div>
                        <span style={{ fontSize: "12px", color: "#64748b" }}>or</span>
                        <input
                          type="text"
                          className="form-control-input"
                          style={{ flex: 1 }}
                          placeholder="Enter illustration URL path (e.g. /img/...)"
                          value={courseImg}
                          onChange={(e) => setCourseImg(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Teaching Methodology Checklist</label>
                      <div className="list-builder">
                        <ul className="list-builder-items">
                          {courseMethods.map((method, idx) => (
                            <li className="list-builder-item" key={idx}>
                              <input
                                type="text"
                                className="form-control-input"
                                placeholder={`Methodology point #${idx + 1}`}
                                value={method}
                                onChange={(e) => updateMethodField(idx, e.target.value)}
                              />
                              {courseMethods.length > 1 && (
                                <button
                                  type="button"
                                  className="remove-list-btn"
                                  onClick={() => removeMethodField(idx)}
                                >
                                  ❌
                                </button>
                              )}
                            </li>
                          ))}
                        </ul>
                        <button type="button" className="add-list-btn" onClick={addMethodField}>
                          ➕ Add Methodology Point
                        </button>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Course Durations Syllabus Modules</label>
                      <div style={{ maxHeight: "300px", overflowY: "auto", paddingRight: "5px" }}>
                        {courseDurations.map((duration, dIdx) => (
                          <div className="durations-builder-card" key={dIdx}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", alignItems: "center" }}>
                              <input
                                type="text"
                                className="form-control-input"
                                style={{ fontWeight: "bold", width: "70%" }}
                                placeholder="Duration Title (e.g. 3 Months Training)"
                                value={duration.title}
                                onChange={(e) => updateDurationTitle(dIdx, e.target.value)}
                              />
                              {courseDurations.length > 1 && (
                                <button
                                  type="button"
                                  className="remove-list-btn"
                                  onClick={() => removeDurationBlock(dIdx)}
                                >
                                  Delete Block
                                </button>
                              )}
                            </div>

                            <ul className="list-builder-items">
                              {duration.points.map((pt, pIdx) => (
                                <li className="list-builder-item" key={pIdx}>
                                  <input
                                    type="text"
                                    className="form-control-input"
                                    placeholder={`Syllabus Topic #${pIdx + 1}`}
                                    value={pt}
                                    onChange={(e) => updateDurationPointValue(dIdx, pIdx, e.target.value)}
                                  />
                                  {duration.points.length > 1 && (
                                    <button
                                      type="button"
                                      className="remove-list-btn"
                                      onClick={() => removeDurationPoint(dIdx, pIdx)}
                                    >
                                      ❌
                                    </button>
                                  )}
                                </li>
                              ))}
                            </ul>
                            <button
                              type="button"
                              className="add-list-btn"
                              onClick={() => addDurationPoint(dIdx)}
                            >
                              ➕ Add Syllabus Point
                            </button>
                          </div>
                        ))}
                      </div>
                      <button
                        type="button"
                        className="add-list-btn"
                        style={{ marginTop: "10px" }}
                        onClick={addDurationBlock}
                      >
                        ➕ Add New Duration Option
                      </button>
                    </div>
                  </>
                )}

                {/* 2. ACTIVITY FORM LAYOUT */}
                {modalType === "activity" && (
                  <>
                    <div className="form-group">
                      <label>Media Title Caption</label>
                      <input
                        type="text"
                        className="form-control-input"
                        placeholder="e.g. Industrial Visit at Infosys campus"
                        value={actTitle}
                        onChange={(e) => setActTitle(e.target.value)}
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Category Tab Selection</label>
                        <select
                          className="form-control-input"
                          value={actCategory}
                          onChange={(e) => setActCategory(e.target.value)}
                        >
                          <option value="Industrial Visits">Industrial Visits</option>
                          <option value="Workshops & Seminars">Workshops & Seminars</option>
                          <option value="Guest Lectures">Guest Lectures</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Media Format Type</label>
                        <select
                          className="form-control-input"
                          value={actType}
                          onChange={(e) => setActType(e.target.value)}
                        >
                          <option value="image">Image File</option>
                          <option value="video">MP4 Video File</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Media Attachment Upload <span style={{ color: "#ef4444" }}>*</span></label>
                      <div className="file-upload-wrapper">
                        <div className="file-preview-wrap">
                          {actPath ? (
                            actType === "video" ? (
                              <span style={{ fontSize: "20px" }}>🎥</span>
                            ) : (
                              <img src={actPath} className="file-preview-img" alt="Preview" />
                            )
                          ) : (
                            <span style={{ fontSize: "20px" }}>📁</span>
                          )}
                        </div>
                        <div className="file-input-btn">
                          Upload {actType === "video" ? "Video" : "Image"}
                          <input
                            type="file"
                            accept={actType === "video" ? "video/mp4" : "image/*"}
                            onChange={(e) => handleFileUpload(e, setActPath)}
                          />
                        </div>
                        <span style={{ fontSize: "12px", color: "#64748b" }}>or</span>
                        <input
                          type="text"
                          className="form-control-input"
                          style={{ flex: 1 }}
                          placeholder="Paste reference link (e.g. /img/...)"
                          value={actPath}
                          onChange={(e) => setActPath(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* 3. TESTIMONIAL FORM LAYOUT */}
                {modalType === "testimonial" && (
                  <>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Student Full Name <span style={{ color: "#ef4444" }}>*</span></label>
                        <input
                          type="text"
                          className="form-control-input"
                          placeholder="e.g. Shivam Garg"
                          value={testName}
                          onChange={(e) => setTestName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Placed Title / Designation <span style={{ color: "#ef4444" }}>*</span></label>
                        <input
                          type="text"
                          className="form-control-input"
                          placeholder="e.g. QA Engineer"
                          value={testTitle}
                          onChange={(e) => setTestTitle(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Student Location / Company</label>
                        <input
                          type="text"
                          className="form-control-input"
                          placeholder="e.g. Chandigarh, India"
                          value={testLocation}
                          onChange={(e) => setTestLocation(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Review Category filter</label>
                        <select
                          className="form-control-input"
                          value={testCategory}
                          onChange={(e) => setTestCategory(e.target.value)}
                        >
                          <option value="QA">Quality Assurance (QA)</option>
                          <option value="Backend">Backend Developer</option>
                          <option value="Trainer">Technical Trainer</option>
                          <option value="Full Stack">Full Stack Dev</option>
                          <option value="Blockchain">Blockchain</option>
                          <option value="Cybersecurity">Cybersecurity</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Review Star Rating</label>
                        <select
                          className="form-control-input"
                          value={testRating}
                          onChange={(e) => setTestRating(e.target.value)}
                        >
                          <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
                          <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
                          <option value="3">⭐⭐⭐ (3 Stars)</option>
                          <option value="2">⭐⭐ (2 Stars)</option>
                          <option value="1">⭐ (1 Star)</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Profile Avatar / Image</label>
                        <div className="file-upload-wrapper">
                          <div className="file-preview-wrap">
                            {testAvatar ? (
                              <img src={testAvatar} className="file-preview-img" style={{ borderRadius: "50%" }} alt="Avatar" />
                            ) : (
                              <span style={{ fontSize: "20px" }}>👤</span>
                            )}
                          </div>
                          <div className="file-input-btn">
                            Upload Photo
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleFileUpload(e, setTestAvatar)}
                            />
                          </div>
                          <input
                            type="text"
                            className="form-control-input"
                            style={{ flex: 1 }}
                            placeholder="or paste path (e.g. /img/...)"
                            value={testAvatar}
                            onChange={(e) => setTestAvatar(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Testimonial Review Message <span style={{ color: "#ef4444" }}>*</span></label>
                      <textarea
                        className="form-control-input"
                        placeholder="Write student feedback or placement review here..."
                        value={testText}
                        onChange={(e) => setTestText(e.target.value)}
                        required
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="modal-footer">
                <button type="button" className="cancel-btn" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
