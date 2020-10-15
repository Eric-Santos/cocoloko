import React from "react";

import "../styles/Home.css";
import { Image } from "semantic-ui-react";

const Home = () => {
  return (
    <div className="main">  
    <h1>#FugaAlCocoLoko</h1>
      <Image src="/images/coverComp.jpg" size="huge" centered alt="artwork" />
    </div>
  );
};

export default Home;
