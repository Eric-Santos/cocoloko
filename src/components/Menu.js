import React from "react";

import "../styles/menu.css";

const ImageExampleFluid = () => (
  <div className="menu">
    <img src="/images/menu1.jpg" alt="menu" />
    <img src="/images/menu2.jpg" alt="menu" />
    <img src="/images/menu3.jpg" alt="menu" />
    <img src="/images/menu4.jpg" alt="menu" />
    <img
      src="/images/menu5.jpg"
      style={{ transform: "rotate(-90deg)" }}
      alt="menu"
    />
    <img
      src="/images/menu6.jpg"
      style={{ transform: "rotate(-90deg)" }}
      alt="menu"
    />
  </div>
);

export default ImageExampleFluid;
