import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
      <div className="mobile-option">
        <a href="#project">
        <i class="fi fi-rr-edit-alt option-icon"></i>Projects
        </a>
      </div>
      <div className="mobile-option">
        <a href="#skill">
        <i class="fi fi-rr-edit-alt option-icon"></i>Skills
        </a>
      </div>
      <div className="mobile-option ">
        <a href="#work">
        <i class="fi fi-rr-edit-alt option-icon"></i>Works
        </a>
      </div>
      <div className="mobile-option">
        <a href="#contact">
        <i class="fi fi-rr-edit-alt option-icon"></i>Contact
        </a>
      </div>    
      </div>
    </div>
  );
}

export default Mobile;
