import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="premium_footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
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
          <div className="col-sm-6 col-lg-4">
            <div className="footer_block">
              <h4 className="footer_title">Stay Updated</h4>
              <p className="footer_about">Subscribe to our newsletter for latest updates and offers.</p>
              <div className="footer_newsletter">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
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
