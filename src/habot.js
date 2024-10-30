import React from "react";
import "./habot.css"; // Import the CSS file for styling

const HabotSignup = () => {
  return (
    <div className="habot-signup-container d-flex">
      <div className="widthalf">
        <div className="header">
          <h2>Ready to dive into HABOT?</h2>
        </div>

        <div className="description ">
          <p className="left-aligned">
            Signing up with HABOT opens the door to a world of new opportunities{" "}
            <br />
            and potential for business growth. Gain access to a vibrant
            <br />
            community of like-minded individuals, unlock valuable resources, and{" "}
            <br />
            take the first step towards realizing your entrepreneurial dreams.{" "}
            <br />
          </p>
        </div>
        <div className="cta">
          <button className="signup-button">Sign Up Today!</button>
        </div>
      </div>

      <div className="location-buttons widthalf">
        <button className="location-button">Abu Dhabi</button>
        <button className="location-button">Dubai</button>
        <button className="location-button">Sharjah & Ajman</button>
        <button className="location-button">Fujairah</button>
        <button className="location-button">Ras Al Khaimah</button>
        <button className="location-button">Umm Al Quwain</button>
      </div>
    </div>
  );
};

export default HabotSignup;
