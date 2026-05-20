import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="premium_footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="footer_block">
              <img src="/img/logo.png" className="footer_logo" alt="Logo" />
              <p className="footer_about">
                Empowering students with industry-level training and real-world experience to build a successful tech career.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <div className="footer_block">
              <h4 className="footer_title">Quick Links</h4>
              <ul className="footer_links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/activities">Activities</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <div className="footer_block">
              <h4 className="footer_title">Top Courses</h4>
              <ul className="footer_links">
                <li><Link to="/courses">AI/Machine Learning</Link></li>
                <li><Link to="/courses">Data Science</Link></li>
                <li><Link to="/courses">Full Stack Development</Link></li>
                <li><Link to="/courses">Data Analyst</Link></li>
                <li><Link to="/courses">Blockchain</Link></li>
                <li><Link to="/courses">Cybersecurity</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className="footer_block">
              <h4 className="footer_title">Our Location</h4>
              <div className="row g-4 align-items-center">
                <div className="col-md-5">
                  <div className="footer_map_wrapper">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.73024844393!2d76.72481197630444!3d30.68241347460981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febfe87e901c3%3A0xaf2bcb5f0c8e1abf!2sAlpha%20IT%20Managed%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1716187900000!5m2!1sen!2sin"
                      width="100%"
                      height="120"
                      style={{ border: 0, borderRadius: "10px" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Alpha IT Location"
                      className="footer_map_iframe"
                    ></iframe>
                    <a
                      href="https://maps.app.goo.gl/bQK2rxM5ebeWMCJ96"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer_map_link"
                    >
                      <span className="map_icon">📍</span> Find us on Maps
                    </a>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="footer_contact_info">
                    <div className="contact_item">
                      <svg className="contact_svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span className="contact_text">
                        Plot ITC 15, IT Park, Sector 67, Sahibzada Ajit Singh Nagar, Punjab 160062
                      </span>
                    </div>
                    <div className="contact_item">
                      <svg className="contact_svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span className="contact_text">Open · Closes 5 pm</span>
                    </div>
                    <div className="contact_item">
                      <svg className="contact_svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      <a href="https://alphait.us" target="_blank" rel="noopener noreferrer" className="contact_text contact_link">
                        alphait.us
                      </a>
                    </div>
                    <div className="contact_item">
                      <svg className="contact_svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <a href="tel:01725063856" className="contact_text contact_link">
                        0172 506 3856
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom_icons">
          <a href="https://www.linkedin.com/in/alpha-it-6a8a73364" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.youtube.com/@AlphaIT-India" target="_blank" rel="noopener noreferrer">
            <img src="/icons/youtube.png" alt="YouTube" />
          </a>
          <a href="https://facebook.com/AlphaITCompany" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.png" alt="Facebook" />
          </a>
        </div>
        <hr className="footer_divider" />
        <div className="footer_bottom">
          <p>© {new Date().getFullYear()} Alpha IT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
