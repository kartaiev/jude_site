import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";

export const Navbar = ({ classEl, lessons, showEl }) => {
  return (
    <nav className={`navbar ${classEl}`}>
      <FontAwesomeIcon icon={faChevronUp} className="arrow-up" />
      <ul className={`${classEl}`}>
        {lessons.map(lesson => (
          <li
            className={`li-style ${classEl}`}
            style={{ transitionDelay: `${lesson} * 1s` }}
            onClick={showEl}
            key={lesson}
          >
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
