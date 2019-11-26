import React from "react";
import "./Title.scss";

export const Title = ({ classEl }) => {
  return (
    <div className={`title ${classEl}`}>
      <h1>
        Послание <br /> <span>Иуды</span>
      </h1>
    </div>
  );
};
