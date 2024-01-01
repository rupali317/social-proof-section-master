import React from "react";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { TestimonialCards } from "./components/TestimonialCards";
import { Rating } from "./components/Rating";
import * as GlobalStyles from "./styles/Global.style";

export const App = () => (
  <>
    <GlobalStyles.BaseStyles />
    <GlobalStyles.ResetStyles />
    <GlobalStyles.DefaultStyles />
    <WelcomeMessage />
    <Rating />
    <TestimonialCards />
  </>
);
