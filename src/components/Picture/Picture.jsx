import React from "react";
import { DesktopWidth } from "../../constants/Breakpoints";

export const Picture = (props) => (
  <picture className={props.className}>
    <source
      srcSet={props.desktopVersion}
      media={`(min-width:${DesktopWidth})`}
    />
    <img src={props.mobileVersion} alt="" role="presentation" />
  </picture>
);
