import React from "react";
import * as GlobalStyles from "./styles/Global.style";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { Rating } from "./components/Rating";
import { DecorativeBackground } from "./components/DecorativeBackground";
import { TestimonialCards } from "./components/TestimonialCards";

export const App = () => (
  <>
    <GlobalStyles.BaseStyles />
    <GlobalStyles.ResetStyles />
    <GlobalStyles.DefaultStyles />
    <DecorativeBackground
      mobileVersion="/images/bg-pattern-top-mobile.svg"
      desktopVersion="/images/bg-pattern-top-desktop.svg"
      className="top-left-pattern"
    />
    <WelcomeMessage />
    <Rating />
    <TestimonialCards />
    <DecorativeBackground
      mobileVersion="/images/bg-pattern-bottom-mobile.svg"
      desktopVersion="/images/bg-pattern-bottom-desktop.svg"
      className="bottom-right-pattern"
    />
  </>
);
