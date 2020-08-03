import React from "react";
import { Icon, Menu } from "semantic-ui-react";

import "../styles/sidebarVertical.css";

const SidebarVertical = () => {
  return (
    <Menu
      className="hide"
      borderless
      size="mini"
      inverted
      compact
      icon="labeled"
      vertical
      fixed
      style={{ position: "absolute", left: "1rem", top: "15rem" }}
    >
      <Menu.Item
        href="https://www.facebook.com/CocolokoElPaso/"
        name="facebook"
      >
        <Icon name="facebook" />
        Facebook
      </Menu.Item>

      <Menu.Item href="https://www.instagram.com/coco.lokoep/" name="instagram">
        <Icon name="instagram" />
        instagram
      </Menu.Item>

      <Menu.Item href="www.snapchat.com/coco.loko17/" name="snapchat">
        <Icon name="snapchat" />
        snapchat
      </Menu.Item>
    </Menu>
  );
};

export default SidebarVertical;
