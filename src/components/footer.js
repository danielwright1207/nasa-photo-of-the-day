import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

const Styledbutton = styled.button`
  color: ${(pr) => pr.theme.dangerColor};
  padding: 4px;
  border: 1px solid green;
  font-size: 1.5rem;
  &:hover {
    color: green;
    transition: all 0.5s ease-in-out;
    transform: scale(1.5);
  }
`;

const Footer = () => {
  return (
    <div>
      <h2>
        For More information about this and other incredible science of the
        universe visit
      </h2>
      <Styledbutton>
        <a href="http://www.nasa.org/">http://www.nasa.org/</a>
      </Styledbutton>
    </div>
  );
};

export default Footer;
