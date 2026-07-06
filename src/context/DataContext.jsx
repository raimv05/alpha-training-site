import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext(null);

const defaultCourses = [
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

const defaultActivities = [
  // Industrial Visits
  { id: "iv-v1", title: "Industrial Visit Video", category: "Industrial Visits", type: "video", path: "/img/activity/visits/36.mp4" },
  { id: "iv-i1", title: "Industrial Visit 1", category: "Industrial Visits", type: "image", path: "/img/activity/visits/3.webp" },
  { id: "iv-i2", title: "Industrial Visit 2", category: "Industrial Visits", type: "image", path: "/img/activity/visits/4.webp" },
  { id: "iv-i3", title: "Industrial Visit 3", category: "Industrial Visits", type: "image", path: "/img/activity/visits/6.webp" },
  { id: "iv-i4", title: "Industrial Visit 4", category: "Industrial Visits", type: "image", path: "/img/activity/visits/7.webp" },
  { id: "iv-i5", title: "Industrial Visit 5", category: "Industrial Visits", type: "image", path: "/img/activity/visits/9.webp" },
  { id: "iv-i6", title: "Industrial Visit 6", category: "Industrial Visits", type: "image", path: "/img/activity/visits/10.webp" },
  { id: "iv-i7", title: "Industrial Visit 7", category: "Industrial Visits", type: "image", path: "/img/activity/visits/16.webp" },
  { id: "iv-i8", title: "Industrial Visit 8", category: "Industrial Visits", type: "image", path: "/img/activity/visits/17.webp" },
  { id: "iv-i9", title: "Industrial Visit 9", category: "Industrial Visits", type: "image", path: "/img/activity/visits/18.webp" },
  { id: "iv-i10", title: "Industrial Visit 10", category: "Industrial Visits", type: "image", path: "/img/activity/visits/19.webp" },
  { id: "iv-i11", title: "Industrial Visit 11", category: "Industrial Visits", type: "image", path: "/img/activity/visits/20.webp" },
  { id: "iv-i12", title: "Industrial Visit 12", category: "Industrial Visits", type: "image", path: "/img/activity/visits/21.webp" },
  { id: "iv-i13", title: "Industrial Visit 13", category: "Industrial Visits", type: "image", path: "/img/activity/visits/23.webp" },
  { id: "iv-i14", title: "Industrial Visit 14", category: "Industrial Visits", type: "image", path: "/img/activity/visits/24.webp" },
  { id: "iv-i15", title: "Industrial Visit 15", category: "Industrial Visits", type: "image", path: "/img/activity/visits/26.webp" },
  { id: "iv-i16", title: "Industrial Visit 16", category: "Industrial Visits", type: "image", path: "/img/activity/visits/27.webp" },
  { id: "iv-i17", title: "Industrial Visit 17", category: "Industrial Visits", type: "image", path: "/img/activity/visits/29.webp" },
  { id: "iv-i18", title: "Industrial Visit 18", category: "Industrial Visits", type: "image", path: "/img/activity/visits/30.webp" },
  { id: "iv-i19", title: "Industrial Visit 19", category: "Industrial Visits", type: "image", path: "/img/activity/visits/41.webp" },
  { id: "iv-i20", title: "Industrial Visit 20", category: "Industrial Visits", type: "image", path: "/img/activity/visits/43.webp" },

  // Workshops & Seminars
  { id: "ws-v1", title: "Workshop Video", category: "Workshops & Seminars", type: "video", path: "/img/activity/workshops/38.mp4" },
  { id: "ws-i1", title: "Workshop 1", category: "Workshops & Seminars", type: "image", path: "/img/activity/workshops/2.webp" },
  { id: "ws-i2", title: "Workshop 2", category: "Workshops & Seminars", type: "image", path: "/img/activity/workshops/8.webp" },
  { id: "ws-i3", title: "Workshop 3", category: "Workshops & Seminars", type: "image", path: "/img/activity/workshops/47.webp" },
  { id: "ws-i4", title: "Workshop 4", category: "Workshops & Seminars", type: "image", path: "/img/activity/workshops/13.webp" },
  { id: "ws-i5", title: "Workshop 5", category: "Workshops & Seminars", type: "image", path: "/img/activity/workshops/14.webp" },
  { id: "ws-i6", title: "Workshop 6", category: "Workshops & Seminars", type: "image", path: "/img/activity/workshops/32.webp" },
  { id: "ws-i7", title: "Workshop 7", category: "Workshops & Seminars", type: "image", path: "/img/activity/workshops/33.webp" },
  { id: "ws-i8", title: "Workshop 8", category: "Workshops & Seminars", type: "image", path: "/img/activity/workshops/35.webp" },
  { id: "ws-i9", title: "Workshop 9", category: "Workshops & Seminars", type: "image", path: "/img/activity/workshops/39.webp" },
  { id: "ws-i10", title: "Workshop 10", category: "Workshops & Seminars", type: "image", path: "/img/activity/workshops/42.webp" },
  { id: "ws-i11", title: "Workshop 11", category: "Workshops & Seminars", type: "image", path: "/img/activity/workshops/48.webp" },

  // Guest Lectures
  { id: "gl-v1", title: "Guest Lecture Video", category: "Guest Lectures", type: "video", path: "/img/activity/lectures/37.mp4" },
  { id: "gl-i1", title: "Guest Lecture 1", category: "Guest Lectures", type: "image", path: "/img/activity/lectures/1.webp" },
  { id: "gl-i2", title: "Guest Lecture 2", category: "Guest Lectures", type: "image", path: "/img/activity/lectures/5.webp" },
  { id: "gl-i3", title: "Guest Lecture 3", category: "Guest Lectures", type: "image", path: "/img/activity/lectures/11.webp" },
  { id: "gl-i4", title: "Guest Lecture 4", category: "Guest Lectures", type: "image", path: "/img/activity/lectures/12.webp" },
  { id: "gl-i5", title: "Guest Lecture 5", category: "Guest Lectures", type: "image", path: "/img/activity/lectures/15.webp" },
  { id: "gl-i6", title: "Guest Lecture 6", category: "Guest Lectures", type: "image", path: "/img/activity/lectures/22.webp" },
  { id: "gl-i7", title: "Guest Lecture 7", category: "Guest Lectures", type: "image", path: "/img/activity/lectures/25.webp" },
  { id: "gl-i8", title: "Guest Lecture 8", category: "Guest Lectures", type: "image", path: "/img/activity/lectures/28.webp" },
  { id: "gl-i9", title: "Guest Lecture 9", category: "Guest Lectures", type: "image", path: "/img/activity/lectures/31.webp" },
  { id: "gl-i10", title: "Guest Lecture 10", category: "Guest Lectures", type: "image", path: "/img/activity/lectures/40.webp" },
  { id: "gl-i11", title: "Guest Lecture 11", category: "Guest Lectures", type: "image", path: "/img/activity/lectures/45.webp" },
  { id: "gl-i12", title: "Guest Lecture 12", category: "Guest Lectures", type: "image", path: "/img/activity/lectures/46.webp" },
];

const defaultTestimonials = [
  {
    id: "test-1",
    companyLogo: "/img/logo-cropped.png",
    clientName: "Shivam Garg",
    clientTitle: "QA Engineer",
    clientLocation: "Chandigarh, India",
    clientAvatar: "/img/testimonials/1.jpeg",
    testimonialText: "My training at Alpha IT Company has been a turning point. I learned how to think logically, identify issues, and test software with real industry-level tools. I now feel fully prepared to work in the QA domain.",
    rating: 5,
    category: "QA",
  },
  {
    id: "test-2",
    companyLogo: "/img/logo-cropped.png",
    clientName: "Abhishek Yadav",
    clientTitle: "QA Engineer",
    clientLocation: "Mohali, India",
    clientAvatar: "/img/testimonials/2.jpeg",
    testimonialText: "Working as a QA Engineering intern was a great learning experience. I gained deep insights into manual and automation testing, writing test cases, and understanding real-world bug reporting.",
    rating: 5,
    category: "QA",
  },
  {
    id: "test-3",
    companyLogo: "/img/logo-cropped.png",
    clientName: "Varinda Garg",
    clientTitle: "Backend Developer",
    clientLocation: "Chandigarh, India",
    clientAvatar: "/img/testimonials/3.jpeg",
    testimonialText: "My backend development internship helped me transform theoretical knowledge into practical skills. I got experience working with APIs, databases, and server-side logic.",
    rating: 5,
    category: "Backend",
  },
  {
    id: "test-4",
    companyLogo: "/img/logo-cropped.png",
    clientName: "Harmanpreet Kaur",
    clientTitle: "Backend Developer",
    clientLocation: "Patiala, India",
    clientAvatar: "/img/testimonials/4.jpeg",
    testimonialText: "I learned how scalable backend systems are built and how to write clean, structured code. The hands-on projects gave me real exposure to industry practices.",
    rating: 5,
    category: "Backend",
  },
  {
    id: "test-5",
    companyLogo: "/img/logo-cropped.png",
    clientName: "Amritpal Singh",
    clientTitle: "Backend Developer",
    clientLocation: "Ludhiana, India",
    clientAvatar: "/img/testimonials/5.jpeg",
    testimonialText: "From database handling to API creation, every module was explained clearly. The practical approach and constant support from mentors made this internship incredible.",
    rating: 5,
    category: "Backend",
  },
  {
    id: "test-6",
    companyLogo: "/img/logo-cropped.png",
    clientName: "Nitin Rana",
    clientTitle: "Backend Developer",
    clientLocation: "Mohali, India",
    clientAvatar: "/img/testimonials/6.jpeg",
    testimonialText: "I learned modern backend concepts, debugging techniques, version control, and best practices for writing efficient code. The training was friendly and professional.",
    rating: 4,
    category: "Backend",
  },
  {
    id: "test-7",
    companyLogo: "/img/logo-cropped.png",
    clientName: "Agrim Pradhan Saxena",
    clientTitle: "Technical Trainer",
    clientLocation: "Chandigarh, India",
    clientAvatar: "/img/testimonials/7.jpeg",
    testimonialText: "Training interns at Alpha IT Company has been rewarding. The environment encourages innovation and growth, and watching students develop real industry skills has been truly fulfilling.",
    rating: 5,
    category: "Trainer",
  },
  {
    id: "test-8",
    companyLogo: "/img/logo-cropped.png",
    clientName: "Ansh Kapoor",
    clientTitle: "Technical Trainer",
    clientLocation: "Chandigarh, India",
    clientAvatar: "/img/testimonials/8.jpeg",
    testimonialText: "Guiding interns through practical, real-world learning and seeing their progress has been the highlight of my work at Alpha IT Company.",
    rating: 5,
    category: "Trainer",
  },
];

export function DataProvider({ children }) {
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem("alpha-courses");
    return saved ? JSON.parse(saved) : defaultCourses;
  });

  const [activities, setActivities] = useState(() => {
    const saved = localStorage.getItem("alpha-activities");
    return saved ? JSON.parse(saved) : defaultActivities;
  });

  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem("alpha-testimonials");
    return saved ? JSON.parse(saved) : defaultTestimonials;
  });

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem("alpha-courses", JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem("alpha-activities", JSON.stringify(activities));
  }, [activities]);

  useEffect(() => {
    localStorage.setItem("alpha-testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  // Course Helpers
  const addCourse = (newCourse) => {
    setCourses((prev) => [...prev, { ...newCourse, id: newCourse.id || `course-${Date.now()}` }]);
  };

  const updateCourse = (id, updated) => {
    setCourses((prev) => prev.map((c) => (c.id === id ? { ...c, ...updated } : c)));
  };

  const deleteCourse = (id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  // Activity Helpers
  const addActivity = (newAct) => {
    setActivities((prev) => [...prev, { ...newAct, id: `act-${Date.now()}` }]);
  };

  const updateActivity = (id, updated) => {
    setActivities((prev) => prev.map((a) => (a.id === id ? { ...a, ...updated } : a)));
  };

  const deleteActivity = (id) => {
    setActivities((prev) => prev.filter((a) => a.id !== id));
  };

  // Testimonial Helpers
  const addTestimonial = (newTest) => {
    setTestimonials((prev) => [...prev, { ...newTest, id: `test-${Date.now()}` }]);
  };

  const updateTestimonial = (id, updated) => {
    setTestimonials((prev) => prev.map((t) => (t.id === id ? { ...t, ...updated } : t)));
  };

  const deleteTestimonial = (id) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <DataContext.Provider
      value={{
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
