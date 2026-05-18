import { useState, useEffect, useRef } from "react";
import { useDarkMode } from "../context/DarkModeContext.jsx";
import "./Testimonials_2.css";

const testimonialData = [
  {
    companyLogo: "/img/logo-cropped.png",
    clientName: "Shivam Garg",
    clientTitle: "QA Engineer",
    clientLocation: "Chandigarh, India",
    clientAvatar: "/img/testimonials/1.jpeg",
    testimonialText:
      "My training at Alpha IT Company has been a turning point. I learned how to think logically, identify issues, and test software with real industry-level tools. I now feel fully prepared to work in the QA domain.",
    rating: 5,
    category: "QA",
  },
  {
    companyLogo: "/img/logo-cropped.png",
    clientName: "Abhishek Yadav",
    clientTitle: "QA Engineer",
    clientLocation: "Mohali, India",
    clientAvatar: "/img/testimonials/2.jpeg",
    testimonialText:
      "Working as a QA Engineering intern was a great learning experience. I gained deep insights into manual and automation testing, writing test cases, and understanding real-world bug reporting.",
    rating: 5,
    category: "QA",
  },
  {
    companyLogo: "/img/logo-cropped.png",
    clientName: "Varinda Garg",
    clientTitle: "Backend Developer",
    clientLocation: "Chandigarh, India",
    clientAvatar: "/img/testimonials/3.jpeg",
    testimonialText:
      "My backend development internship helped me transform theoretical knowledge into practical skills. I got experience working with APIs, databases, and server-side logic.",
    rating: 5,
    category: "Backend",
  },
  {
    companyLogo: "/img/logo-cropped.png",
    clientName: "Harmanpreet Kaur",
    clientTitle: "Backend Developer",
    clientLocation: "Patiala, India",
    clientAvatar: "/img/testimonials/4.jpeg",
    testimonialText:
      "I learned how scalable backend systems are built and how to write clean, structured code. The hands-on projects gave me real exposure to industry practices.",
    rating: 5,
    category: "Backend",
  },
  {
    companyLogo: "/img/logo-cropped.png",
    clientName: "Amritpal Singh",
    clientTitle: "Backend Developer",
    clientLocation: "Ludhiana, India",
    clientAvatar: "/img/testimonials/5.jpeg",
    testimonialText:
      "From database handling to API creation, every module was explained clearly. The practical approach and constant support from mentors made this internship incredible.",
    rating: 5,
    category: "Backend",
  },
  {
    companyLogo: "/img/logo-cropped.png",
    clientName: "Nitin Rana",
    clientTitle: "Backend Developer",
    clientLocation: "Mohali, India",
    clientAvatar: "/img/testimonials/6.jpeg",
    testimonialText:
      "I learned modern backend concepts, debugging techniques, version control, and best practices for writing efficient code. The training was friendly and professional.",
    rating: 4,
    category: "Backend",
  },
  {
    companyLogo: "/img/logo-cropped.png",
    clientName: "Agrim Pradhan Saxena",
    clientTitle: "Technical Trainer",
    clientLocation: "Chandigarh, India",
    clientAvatar: "/img/testimonials/7.jpeg",
    testimonialText:
      "Training interns at Alpha IT Company has been rewarding. The environment encourages innovation and growth, and watching students develop real industry skills has been truly fulfilling.",
    rating: 5,
    category: "Trainer",
  },
  {
    companyLogo: "/img/logo-cropped.png",
    clientName: "Ansh Kapoor",
    clientTitle: "Technical Trainer",
    clientLocation: "Chandigarh, India",
    clientAvatar: "/img/testimonials/8.jpeg",
    testimonialText:
      "Guiding interns through practical, real-world learning and seeing their progress has been the highlight of my work at Alpha IT Company.",
    rating: 5,
    category: "Trainer",
  },
];

const categories = ["All", "QA", "Backend", "Trainer"];

function StarRating({ rating }) {
  return (
    <div className="t2-stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`t2-star ${star <= rating ? "t2-star--filled" : ""}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ data }) {
  return (
    <article
      className="t2-card"
      tabIndex={0}
      aria-label={`Testimonial from ${data.clientName}`}
    >
      {/* Logo Area */}
      <div className="t2-logo-area">
        <img
          src={data.companyLogo}
          alt="Alpha IT Managed Services"
          className="t2-company-logo"
          loading="lazy"
        />
      </div>

      {/* Avatar */}
      <div className="t2-avatar-wrap">
        <img
          src={data.clientAvatar}
          alt={`Photo of ${data.clientName}`}
          className="t2-avatar"
          loading="lazy"
          width="80"
          height="80"
        />
      </div>

      {/* Info */}
      <h3 className="t2-name">{data.clientName}</h3>
      <p className="t2-title">{data.clientTitle}</p>
      <p className="t2-location">
        <span className="t2-location-pin" aria-hidden="true">📍</span>
        {data.clientLocation}
      </p>

      {/* Rating */}
      <StarRating rating={data.rating} />

      {/* Testimonial — scrolls up on hover */}
      <div className="t2-quote-container">
        <blockquote className="t2-quote">
          <span className="t2-quote-icon" aria-hidden="true">"</span>
          <p>{data.testimonialText}</p>
        </blockquote>
      </div>
    </article>
  );
}

export default function Testimonials2() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { darkMode } = useDarkMode();
  const [searchQuery, setSearchQuery] = useState("");
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const touchStartX = useRef(0);
  const scrollLeftStart = useRef(0);
  const isDragging = useRef(false);

  /* ── Fade-in entrance when section scrolls into view ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ── Touch swipe support ── */
  const handleTouchStart = (e) => {
    isDragging.current = true;
    touchStartX.current = e.touches[0].clientX;
    scrollLeftStart.current = scrollRef.current?.scrollLeft || 0;
    // Pause animation while swiping
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = "paused";
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    scrollRef.current.scrollLeft = scrollLeftStart.current - dx;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = "running";
    }
  };

  /* ── Mouse drag support ── */
  const handleMouseDown = (e) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
    scrollLeftStart.current = scrollRef.current?.scrollLeft || 0;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.clientX - touchStartX.current;
    scrollRef.current.scrollLeft = scrollLeftStart.current - dx;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  };

  const filteredData = testimonialData.filter((item) => {
    const matchesCategory =
      activeFilter === "All" || item.category === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      item.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.testimonialText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.clientTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Duplicate cards for seamless infinite loop
  const scrollCards = [...filteredData, ...filteredData, ...filteredData];

  return (
    <section
      ref={sectionRef}
      className={`t2-section ${darkMode ? "t2-dark" : ""} ${sectionVisible ? "t2-section--visible" : ""}`}
      aria-labelledby="t2-heading"
    >
      <div className="t2-container">
        {/* Header */}
        <div className="t2-header">
          <span className="t2-kicker">Testimonials</span>
          <h2 id="t2-heading" className="t2-heading">
            What Our Students Say
          </h2>
          <p className="t2-subheading">
            Real stories from our graduates who have transformed their careers
            through hands-on training and mentorship at Alpha IT.
          </p>
        </div>

        {/* Controls */}
        <div className="t2-controls">
          <div className="t2-filters" role="tablist" aria-label="Filter testimonials by category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeFilter === cat}
                className={`t2-filter-btn ${activeFilter === cat ? "t2-filter-btn--active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="t2-search-wrap">
            <input
              type="search"
              className="t2-search"
              placeholder="Search testimonials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search testimonials"
            />
            <span className="t2-search-icon" aria-hidden="true">🔍</span>
          </div>
        </div>
      </div>

      {/* ── Infinite Horizontal Scroll ── */}
      {filteredData.length > 0 ? (
        <div className="t2-scroll-wrapper">
          {/* Left/right edge fade */}
          <div className="t2-scroll-fade t2-scroll-fade--left" />
          <div className="t2-scroll-fade t2-scroll-fade--right" />

          <div
            ref={scrollRef}
            className="t2-scroll-track"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="t2-scroll-inner">
              {scrollCards.map((item, i) => (
                <div className="t2-scroll-item" key={`${item.clientName}-${i}`}>
                  <TestimonialCard data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="t2-container">
          <div className="t2-empty">
            <p>No testimonials found matching your criteria.</p>
          </div>
        </div>
      )}
    </section>
  );
}
