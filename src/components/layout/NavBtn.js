import React from "react";
import "./NavBtn.scss";

export const NavBtn = ({ classEl, showEl }) => {
  return (
    <div className={`nav-btn ${classEl}`} onClick={showEl}>
      <div className="nav-line" />
      <div className="nav-line" />
      <div className="nav-line" />
    </div>
  );
};
