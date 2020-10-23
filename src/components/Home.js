import React from "react";

import "../styles/Home.css";
import { Image } from "semantic-ui-react";

const Home = () => {
  return (
    <div className="main">
      <h3>#FugaAlCocoLoko</h3>
      <Image
        src="/images/coverComp.jpg"
        size="large"
        centered
        alt="artwork"
        classname="image"
      />
    </div>
  );
};

export default Home;
