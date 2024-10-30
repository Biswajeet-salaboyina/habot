import React from "react";
import "./howitworks.css";

const Work = () => {
  const items = [
    { id: 1, image: "", tagline: "Select Your Role and Signup" },
    { id: 2, image: "", tagline: "Buyers Post Your Requirements" },
    {
      id: 3,
      image: "",
      tagline: "Review, Select, and Contact the Best Suppliers",
    },
    {
      id: 4,
      image: "",
      tagline:
        "Suppliers Complete your profile and get notified for opportunities",
    },
    {
      id: 5,
      image: "",
      tagline: "Contact to Buyers and Share your Quoe for the service",
    },
    {
      id: 6,
      image: "",
      tagline:
        "Both the Parties can Connect and Make Business Leave a Feedback",
    },
  ];

  return (
    <div>
      {/* First Container */}
      <div className="header-container">
        <h1>How it works?</h1>
        <p>
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with <br />
          potential buyers, and build successful business relationships, sharing
          valuable feedback.
        </p>
      </div>

      {/* Second Container */}
      <div className="grid-container">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`inner-container ${index % 2 === 0 ? "light-blue" : ""}`}
          >
            <img src={item.image} alt="img" />
            <p>{item.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
