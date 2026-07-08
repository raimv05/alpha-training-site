import { useState, useEffect, useRef, useMemo } from "react";
import { useDarkMode } from "../context/DarkModeContext.jsx";
import "./Testimonials_2.css";
import { getAssetUrl } from "../utils/assets.js";

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
  const rating = Number(data.rating) || 0;

  return (
    <article
      className="t2-card"
      tabIndex={0}
      aria-label={`Testimonial from ${data.client_name}`}
    >
      {/* Logo Area */}
      <div className="t2-logo-area">
        <img
          src={getAssetUrl(data.company_logo)}
          alt="Alpha IT Managed Services"
          className="t2-company-logo"
          loading="lazy"
        />
      </div>

      {/* Avatar */}
      <div className="t2-avatar-wrap">
        <img
          src={getAssetUrl(data.client_avatar)}
          alt={`Photo of ${data.client_name}`}
          className="t2-avatar"
          loading="lazy"
          width="80"
          height="80"
        />
      </div>

      {/* Info */}
      <h3 className="t2-name">{data.client_name}</h3>
      <p className="t2-title">{data.client_title}</p>
      <p className="t2-location">
        <span className="t2-location-pin" aria-hidden="true">📍</span>
        {data.client_location}
      </p>

      {/* Rating */}
      <StarRating rating={rating} />

      {/* Testimonial — scrolls up on hover */}
      <div className="t2-quote-container">
        <blockquote className="t2-quote">
          <span className="t2-quote-icon" aria-hidden="true">"</span>
          <p>{data.testimonial_text}</p>
        </blockquote>
      </div>
    </article>
  );
}

export default function Testimonials2() {
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  const testimonialData = sectionData?.testimonials ?? [];

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://alphaitms.com/wp-json/training/v1/testimonials"
        );
        const data = await response.json();
        setSectionData(data);
      } catch (error) {
        console.error("Failed to load testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const categories = useMemo(() => {
    const unique = [
      ...new Set(testimonialData.map((item) => item.category).filter(Boolean)),
    ];
    return ["All", ...unique.sort()];
  }, [testimonialData]);
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
    const query = searchQuery.toLowerCase();
    const matchesCategory =
      activeFilter === "All" || item.category === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      item.client_name?.toLowerCase().includes(query) ||
      item.testimonial_text?.toLowerCase().includes(query) ||
      item.client_title?.toLowerCase().includes(query);
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
          <span className="t2-kicker">
            {sectionData?.heading || "Testimonials"}
          </span>
          <h2 id="t2-heading" className="t2-heading">
            {sectionData?.heading_title || "What Our Students Say"}
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
      {loading ? (
        <div className="t2-container">
          <div className="t2-empty">
            <p>Loading testimonials...</p>
          </div>
        </div>
      ) : filteredData.length > 0 ? (
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
                <div className="t2-scroll-item" key={`${item.client_name}-${i}`}>
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
