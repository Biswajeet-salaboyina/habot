import React, { useState } from "react";
import "./videocomponent.css"; // Import the CSS file for styling

const ImageComponent = () => {
  const [activeSection, setActiveSection] = useState("buyer");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="image-container">
      <div className="left-section">
       
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/watch?v=IZLp-TZyDkQ&ab_channel=HabotConnectDMCC"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="right-section">
        <div className="button-container">
          <button onClick={() => handleSectionClick("buyer")}>Buyer</button>
          <button onClick={() => handleSectionClick("supplier")}>
            Supplier
          </button>
        </div>
        <div className={`section-content ${activeSection}`}>
          {activeSection === "buyer" && (
            <ul>
              <li>✔ Post your requirements.</li>
              <li>✔ Sit back for multiple suppliers to contact you.</li>
              <li>
                ✔ Choose among the suppliers based on the ratings and reviews.
              </li>
            </ul>
          )}
          {activeSection === "supplier" && (
            <ul>
              <li>✔ Create detailed profiles.</li>
              <li>✔ Showcase your expertise and past projects.</li>
              <li>✔ Get connected with potential buyers.</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
