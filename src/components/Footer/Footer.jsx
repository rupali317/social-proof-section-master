import React from "react";
import * as FooterStyles from "../../styles/Footer.style";

export const Footer = () => (
  <FooterStyles.Small>
    Challenge by{" "}
    <FooterStyles.Link
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank"
      rel="noreferrer"
      aria-description="Frontend mentor is a platform for developers to upskill via rela-life projects"
    >
      Frontend Mentor
    </FooterStyles.Link>
    . Coded by{" "}
    <FooterStyles.Link
      href="https://www.linkedin.com/in/rupali-rc/"
      target="_blank"
      rel="noreferrer"
      aria-description="Rupali Roy Choudhury is the name of a developer"
    >
      Rupali Roy Choudhury
    </FooterStyles.Link>
  </FooterStyles.Small>
);
