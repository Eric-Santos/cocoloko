import React from "react";

import SidebarVertical from "./SidebarVertical.js";

import "../styles/Home.css";
import { Image } from "semantic-ui-react";

const Home = () => {
  return (
    <div className="main">
      <SidebarVertical />
      <h1>Coco Loko</h1>
      <Image src="/images/cover.jpg" size="huge" centered alt="artwork" />
      <address>
        <h3>9449 Montana Ave., El Paso TX Tel. 915-244-1865</h3>
      </address>
    </div>
  );
};

export default Home;
