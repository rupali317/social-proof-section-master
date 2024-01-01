import React from "react";
import * as FooterStyles from "../../styles/Footer.style";

export const Footer = () => (
  <FooterStyles.Small>
    Challenge by{" "}
    <FooterStyles.Link
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank"
      rel="noreferrer"
    >
      Frontend Mentor
    </FooterStyles.Link>
    . Coded by{" "}
    <FooterStyles.Link
      href="https://www.linkedin.com/in/rupali-rc/"
      target="_blank"
      rel="noreferrer"
    >
      Rupali Roy Choudhury
    </FooterStyles.Link>
  </FooterStyles.Small>
);
