import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";

const ScrollBar = () => {
  return (
    <Link
      activeClass="active"
      to="demo-container"
      spy={true}
      smooth={true}
      offset={-20} // Adjust this offset value if you have a fixed header/navbar
      duration={100} // Duration of the scroll animation in milliseconds
    >
      <FontAwesomeIcon
        icon={faCircleDown}
        style={{ color: "#fff", marginLeft: "20px", fontSize: "60px" }}
      />
    </Link>
  );
};

export default ScrollBar;
