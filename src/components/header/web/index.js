import React from "react";
import "./web.css";
function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
        <i class="fi fi-rr-edit-alt option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skill">
        <i class="fi fi-rr-edit-alt option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option ">
        <a href="#work">
        <i class="fi fi-rr-edit-alt option-icon"></i>Works
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
        <i class="fi fi-rr-edit-alt option-icon"></i>Contact
        </a>
      </div>
      
    </div>
  );
}

export default Web;
