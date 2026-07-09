import { Link } from "react-router-dom";
import { getAssetUrl } from "../utils/assets.js";
import { useState, useEffect } from "react";

export default function Footer() {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
      const fetchFooter = async () => {
          try {
              const response = await fetch(
                  "https://alphaitms.com/wp-json/training/v1/footer"
              );
              const data = await response.json();
              setFooter(data);
          } catch (error) {
              console.error(error);
          }
      };
  
      fetchFooter();
  }, []);
  return (
    <footer className="premium_footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="footer_block">
              <img src={getAssetUrl("/img/logo.png")} className="footer_logo" alt="Logo" />
              <p className="footer_about">
                {footer?.description}
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
                <div className="col-12 col-xl-5">
                  <div className="footer_map_wrapper">
                    <iframe
                      src={footer?.location}
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
                <div className="col-12 col-xl-7">
                  <div className="footer_contact_info">
                    <div className="contact_item">
                      <svg className="contact_svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span className="contact_text">
                        {footer?.address}
                      </span>
                    </div>
                    <div className="contact_item">
                      <svg className="contact_svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span className="contact_text">{footer?.time}</span>
                    </div>
                    <div className="contact_item">
                      <svg className="contact_svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      <a href="https://alphaitms.com" target="_blank" rel="noopener noreferrer" className="contact_text contact_link">
                        alphaitms.com
                      </a>
                    </div>
                    <div className="contact_item">
                      <svg className="contact_svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <div className="contact_links_col" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        {
                          footer?.contact_number?.map((phone) => (
                            <a href={`tel:${phone.number}`} className="contact_text contact_link" key={phone.number}>
                              +{phone.number}
                            </a>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom_icons">
          <a href={footer?.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={getAssetUrl("/icons/linkedin.png")} alt="LinkedIn" />
          </a>
          <a href={footer?.youtube} target="_blank" rel="noopener noreferrer">
            <img src={getAssetUrl("/icons/youtube.png")} alt="YouTube" />
          </a>
          <a href={footer?.facebook} target="_blank" rel="noopener noreferrer">
            <img src={getAssetUrl("/icons/facebook.png")} alt="Facebook" />
          </a>
        </div>
        <hr className="footer_divider" />
        <div className="footer_bottom">
          <p>© {new Date().getFullYear()} {footer?.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
