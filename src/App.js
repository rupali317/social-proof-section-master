import React from "react";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { TestimonialCards } from "./components/TestimonialCards";
import { Rating } from "./components/Rating";

export const App = () => (
  <>
    <WelcomeMessage />
    <Rating />
    <TestimonialCards />
  </>
);
