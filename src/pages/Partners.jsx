import React, { useState, useEffect } from "react";
import { useDarkMode } from "../context/DarkModeContext.jsx";
import "./Partners.css";

// ── SVG LOGOS FOR CORPORATE CLIENTS ──

const CitiLogo = () => (
  <svg viewBox="0 0 120 60" width="100%" height="100%">
    <path d="M10 28 C 30 14, 90 14, 110 28" stroke="#d9272d" strokeWidth="4" fill="none" strokeLinecap="round" />
    <text x="50%" y="45" textAnchor="middle" fill="#002d62" fontSize="24" fontWeight="bold" fontFamily="'Inter', sans-serif">citi</text>
  </svg>
);

const GreenGLogo = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00b4d8" />
        <stop offset="50%" stopColor="#00a896" />
        <stop offset="100%" stopColor="#028090" />
      </linearGradient>
    </defs>
    <path d="M 50,15 A 35,35 0 1,0 85,50 A 15,15 0 0,0 70,50 A 20,20 0 1,1 50,30 L 70,30 L 70,15 Z" fill="url(#greenGrad)" />
    <path d="M 70,30 A 10,10 0 1,0 70,50 A 10,10 0 1,0 70,30 Z" fill="#028090" opacity="0.3" />
  </svg>
);

const CenturionLogo = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <circle cx="50" cy="50" r="45" fill="#0b3c5d" />
    {/* Roman Centurion Head Silhouette */}
    <path d="M50 20 C42 20 38 28 38 38 C38 43 40 45 40 48 C40 50 35 55 35 62 L40 62 L42 67 L48 67 L50 62 L60 62 C60 55 58 52 58 48 C58 45 62 43 62 38 C62 28 58 20 50 20 Z" fill="#ffffff" />
    <path d="M50 15 L50 25 M40 17 L44 26 M60 17 L56 26" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const FreedomMortgageLogo = () => (
  <svg viewBox="0 0 150 70" width="100%" height="100%">
    {/* Eagle Silhouette */}
    <path d="M75 12 C72 15 65 18 55 20 C62 22 70 23 75 25 C80 23 88 22 95 20 C85 18 78 15 75 12 Z" fill="#bfa15f" />
    <path d="M75 25 C65 26 50 29 40 34 C55 33 70 30 75 28 C80 30 95 33 110 34 C100 29 85 26 75 25 Z" fill="#bfa15f" opacity="0.8" />
    <text x="50%" y="55" textAnchor="middle" fill="#0b2240" fontSize="10" fontWeight="bold" fontFamily="'Cinzel', 'Georgia', serif" letterSpacing="0.5">FREEDOM MORTGAGE</text>
  </svg>
);

const SailLogo = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <path d="M25 75 L50 20 L75 75 Z" fill="#0f2a4a" />
    <path d="M38 75 L50 35 L62 75 Z" fill="#ffffff" opacity="0.9" />
    <path d="M50 35 L50 75 L75 75 Z" fill="#1b497d" />
  </svg>
);

const PentagonLogo = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    {/* Pentagon base */}
    <polygon points="50,15 85,40 72,80 28,80 15,40" fill="#1d2d50" />
    {/* Diagonal Stripes on the right */}
    <path d="M45 80 L70 30" stroke="#00a8cc" strokeWidth="6" strokeLinecap="round" />
    <path d="M55 80 L80 30" stroke="#00b4d8" strokeWidth="6" strokeLinecap="round" />
    <path d="M65 80 L90 40" stroke="#90e0ef" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const IngramLogo = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <circle cx="50" cy="50" r="42" fill="#005ea6" />
    <text x="50%" y="57" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="900" fontFamily="'Montserrat', 'Arial Black', sans-serif" letterSpacing="0.5">INGRAM</text>
  </svg>
);

const TriangleLogo = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    {/* Triangles configuration */}
    <polygon points="25,70 50,30 75,70" fill="#9a8c73" opacity="0.8" />
    <polygon points="35,70 60,35 85,70" fill="#c5a880" />
    <polygon points="15,70 40,25 65,70" fill="#4a4e69" opacity="0.6" />
  </svg>
);

const CircularShieldLogo = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <radialGradient id="shieldGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#1e3c72" />
        <stop offset="100%" stopColor="#2a5298" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#shieldGrad)" stroke="#0f2a4a" strokeWidth="2" />
    <circle cx="50" cy="50" r="38" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
    {/* Double red and white lines */}
    <path d="M30 40 L70 40 M30 50 L70 50 M30 60 L70 60" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
    <path d="M32 45 L68 45 M32 55 L68 55" stroke="#d9272d" strokeWidth="4" strokeLinecap="round" />
  </svg>
);


export default function Partners() {
  const { darkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState("all");
  const [partners, setPartners] = useState(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch(
          "https://alphaitms.com/wp-json/training/v1/partners"
        );
        const data = await response.json();
        setPartners(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPartners();
  }, []);

  const collegePartners = [
    {
      name: "St. Xavier's Institute of Technology",
      location: "Mumbai, MH",
      program: "Full-Stack Bootcamp",
      status: "MoU Active",
      year: "2024",
      placements: "25+ Hired",
      logoLetter: "X"
    },
    {
      name: "Lovely Professional University",
      location: "Phagwara, PB",
      program: "AI & ML Center of Excellence",
      status: "MoU Active",
      year: "2023",
      placements: "85+ Placed",
      logoLetter: "L"
    },
    {
      name: "Chandigarh University",
      location: "Mohali, PB",
      program: "Data Science Specialization",
      status: "Training Partner",
      year: "2023",
      placements: "110+ Hired",
      logoLetter: "C"
    },
    {
      name: "Amity University",
      location: "Noida, UP",
      program: "Cybersecurity Labs",
      status: "MoU Active",
      year: "2024",
      placements: "40+ Placed",
      logoLetter: "A"
    },
    {
      name: "BML Munjal University",
      location: "Gurugram, HR",
      program: "Blockchain Research Hub",
      status: "Tech Partner",
      year: "2024",
      placements: "18+ Hired",
      logoLetter: "B"
    },
    {
      name: "Sharda University",
      location: "Greater Noida, UP",
      program: "MERN Stack Internships",
      status: "Training Partner",
      year: "2022",
      placements: "55+ Placed",
      logoLetter: "S"
    }
  ];

  const scaleHeadingParts = partners?.scale_heading?.split("&").map((part) => part.trim());

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="partners_hero">
        <div className="container">
          <div className="partners_hero_content">
            <h2>{partners?.heading}</h2>
            <p>{partners?.title}</p>
          </div>
        </div>
      </section>

      {/* ── Filtering Tabs Navigation ── */}
      {/*
      <div className="partners_nav_container">
        <div className="partners_tabs">
          <button
            className={`partners_tab_btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Partners
          </button>
          <button
            className={`partners_tab_btn ${activeTab === "corporate" ? "active" : ""}`}
            onClick={() => setActiveTab("corporate")}
          >
            Corporate Clients
          </button>
          <button
            className={`partners_tab_btn ${activeTab === "college" ? "active" : ""}`}
            onClick={() => setActiveTab("college")}
          >
            College Tie-ups
          </button>
        </div>
      </div>
      */}

      <div className="container">
        {/* ── Corporate Clients section ── */}
        <section className="corporate_partners_section mb-5 mt-5">
          <div className="row align-items-center mb-4">
            <div className="col-12 text-center text-lg-start">
              <span className="home-kicker">{partners?.scale_text}</span>
              <h2 className="section-title mt-2">
                {scaleHeadingParts?.length >= 2 ? (
                  <>
                    {scaleHeadingParts[0]} & <span style={{ color: "#3a77ff" }}>{scaleHeadingParts[1]}</span>
                  </>
                ) : (
                  partners?.scale_heading
                )}
              </h2>
            </div>
          </div>

          <div className="partners_layout_grid">
            {/* Left Panel: Industries & Value */}
            <div className="partners_left_panel">
              <div className="panel_heading_group">
                <h3>
                  <span className="ti-briefcase panel_icon_blue" />
                  {partners?.industries_heading}
                </h3>
                <div className="industries_badges">
                  {partners?.tags?.map((item) => (
                    <span className="industry_badge" key={item.tag}>{item.tag}</span>
                  ))}
                </div>
              </div>

              <div className="panel_heading_group">
                <h3>
                  <span className="ti-stats-up panel_icon_blue" />
                  {partners?.values_heading}
                </h3>
                <ul className="value_list">
                  {partners?.value_description?.map((item) => (
                    <li key={item.value}>
                      <div className="value_check_wrapper">✓</div>
                      <span>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Panel: Logo Grid */}
            <div className="partners_logo_grid">
              {partners?.logos?.map((logo) => (
                <div className="logo_card" key={logo}>
                  <img src={logo} alt="Partner logo" className="partner_logo_img" />
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Quote Banner */}
          <div className="partners_quote_banner">
            <span className="quote_icon">"</span>
            <div className="quote_text_group">
              <p>{partners?.qoutes_label}</p>
              <span className="quote_author">— {partners?.qoutes_value}</span>
            </div>
          </div>
        </section>

        {/* ── College Tie-ups Section ── */}
        {/*
        <section className="colleges_section">
          <div className="row align-items-center mb-5">
            <div className="col-12 text-center text-lg-start">
              <span className="home-kicker">Academic Network</span>
              <h2 className="section-title mt-2">
                College <span style={{ color: "#21c7c5" }}>Tie-ups</span>
              </h2>
              <p className="section-subtitle">Empowering universities with industry-connected curriculum, labs, and internship tracks.</p>
            </div>
          </div>

          <div className="college_grid">
            {collegePartners.map((college) => (
              <div className="college_card" key={college.name}>
                <div className="college_header">
                  <div className="college_logo_wrapper">
                    <div style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "8px",
                      background: "linear-gradient(135deg, #3a77ff, #21c7c5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      fontWeight: "800",
                      fontSize: "1.4rem"
                    }}>
                      {college.logoLetter}
                    </div>
                  </div>
                  <div className="college_title_group">
                    <h4>{college.name}</h4>
                    <span className="college_location">
                      <span className="ti-location-pin" /> {college.location}
                    </span>
                  </div>
                </div>

                <hr className="college_divider" />

                <div className="college_body_info">
                  <div className="info_row">
                    <span className="info_label">Program:</span>
                    <span className="info_value">{college.program}</span>
                  </div>
                  <div className="info_row">
                    <span className="info_label">Collaboration:</span>
                    <span className="badge_partnership">{college.status}</span>
                  </div>
                  <div className="info_row">
                    <span className="info_label">Partner Since:</span>
                    <span className="info_value">{college.year}</span>
                  </div>
                  <div className="info_row">
                    <span className="info_label">Placements:</span>
                    <span className="info_value" style={{ color: "#21c7c5", fontWeight: "700" }}>{college.placements}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        */}
      </div>
    </>
  );
}
