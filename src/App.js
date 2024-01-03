import React from "react";
import * as GlobalStyles from "./styles/Global.style";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { Rating } from "./components/Rating";
import { TestimonialCards } from "./components/TestimonialCards";

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
