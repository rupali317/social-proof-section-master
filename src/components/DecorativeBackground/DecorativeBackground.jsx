import React from "react";
import { DesktopWidth } from "../../constants/Breakpoints";

export const DecorativeBackground = (props) => (
  <picture className={props.className}>
    <source
      srcSet={props.desktopVersion}
      media={`(min-width: ${DesktopWidth})`}
    />
    <img src={props.mobileVersion} alt="" role="presentation" />
  </picture>
);

// //img -> img {width: 60%;
//     position: absolute;
//     bottom: 0;
//     right: 0;} instead of the picture element
