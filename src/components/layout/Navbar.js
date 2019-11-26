import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";

export const Navbar = ({ classEl, lessons, showEl }) => {
  return (
    <nav className={`navbar ${classEl}`}>
      <FontAwesomeIcon icon={faChevronUp} className="arrow-up" />
      <ul className={`${classEl}`}>
        {lessons.map(lesson => (
          <li key={lesson} className={`li-style ${classEl}`} onClick={showEl}>
            <NavLink to={`/${lesson}`} className={`link ${classEl}`}>
              Урок {lesson}
            </NavLink>
          </li>
        ))}
      </ul>
      <FontAwesomeIcon icon={faChevronDown} className="arrow-down" />
    </nav>
  );
};
