import React from "react";
import axios from "axios";
import { waitForElementToBeRemoved } from "@testing-library/react";

const Footer = () => {
  return (
    <div>
      <h2>
        For More information about this and other incredible science of the
        universe visit
      </h2>
      <a href="http://www.nasa.org/">http://www.nasa.org/</a>
    </div>
  );
};

export default Footer;
