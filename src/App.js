import React, { useState } from "react";
import "./App.css";
import Footer from "./footer";
import HabotSignup from "./habot";
import ImageComponent from "./Videocomponent";
import FindComponent from "./find";
import Work from "./howitworks";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">HABOT</div>
        <nav>
          <ul>
            <li>Find Suppliers</li>
            <li>Find Service Tags</li>
            <li>Login/Sign Up</li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="main-container w-100 content-wrapper">
          <div>
            <h1>Are You a Supplier?</h1>
            <h1> Explore Matching Oppurtunites </h1>

            <div className="search-bar">
              <input
                type="text"
                placeholder="Search your required service here"
              />
              <input
                type="text"
                placeholder="Search your desired location here"
              />
              <button>Search</button>
            </div>

            <p>
              Are you a buyer? Click here if you are looking to post a
              requirements
            </p>
          </div>
        </div>

        <HabotSignup />
        <ImageComponent />
        <FindComponent />
        <Work />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
