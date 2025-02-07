import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bannercolor">
      <div class="nav-container">
        <div class="nav-buttons">
          <div class="nav-button">
            <button class="nv-logo" onclick="location.href='#'" type="button">
              <p>Açucena</p>
            </button>
          </div>
          <div class="nav-button">
            <button class="nv-btn" onclick="location.href='#'" type="button">
              <p>Home</p>
            </button>
          </div>
          <div class="nav-button">
            <button
              class="nv-btn"
              onclick="location.href='#'"
              type="button"
            ></button>
          </div>
          <div class="nav-button">
            <button
              class="nv-btn"
              onclick="location.href='#'"
              type="button"
            ></button>
          </div>
          <div class="nav-button">
            <button
              class="nv-btn"
              onclick="location.href='#'"
              type="button"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
