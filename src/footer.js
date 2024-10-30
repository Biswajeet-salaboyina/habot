import React from "react";
import "./footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-left">
        <img src="HABOT_Logo.png" alt="HABOT Logo" />
        <p>© R. Singhania</p>
      </div>
      <div className="footer-right">
        <ul class="horizontal-list">
          <ul>
            <li>Company</li>
            <ul>
              <li>About</li>
              <li>FAQ</li>
            </ul>
          </ul>
          <ul>
            <li>Terms</li>
            <ul>
              <li>Data Privacy</li>
              <li>Accessibility</li>
            </ul>
          </ul>
          <ul>
            <li>Related</li>
            <ul>
              <li>Find Buyer</li>
              <li>Feedback</li>
            </ul>
          </ul>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
