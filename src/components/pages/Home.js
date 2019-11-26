import React from "react";
import { Title } from "../layout/Title";
import "./Home.scss";

export const Home = ({ classEl }) => {
  return (
    <div className="home">
      <Title classEl={classEl} />
    </div>
  );
};
