import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import Register from "./pages/Register.jsx";
import Activities from "./pages/Activities.jsx";
import Login from "./pages/Login.jsx";
import Partners from "./pages/Partners.jsx";

export default function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DarkModeProvider>
  );
}
