import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";

class Navbar extends Component {
  scrollToBottom = () => {
    this.end.scrollIntoView({ behavior: "smooth" });
  };

  scrollToBeginning = () => {
    this.start.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    const { classEl, lessons, showEl } = this.props;
    return (
      <nav className={`navbar ${classEl}`}>
        <FontAwesomeIcon
          icon={faChevronUp}
          className="arrow-up"
          onClick={this.scrollToBeginning}
        />
        <ul className={`${classEl}`}>
          <li
            ref={el => {
              this.start = el;
            }}
          />
          {lessons.map(lesson => (
            <li key={lesson} className={`li-style ${classEl}`} onClick={showEl}>
              <NavLink
                to={`/${lesson}`}
                className={`link ${classEl}`}
                id={lesson}
              >
                Урок {lesson}
              </NavLink>
            </li>
          ))}
          <li
            ref={el => {
              this.end = el;
            }}
          />
        </ul>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="arrow-down"
          onClick={this.scrollToBottom}
        />
      </nav>
    );
  }
}

export default Navbar;
