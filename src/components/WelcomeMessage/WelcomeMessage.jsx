import React from "react";
import { WelcomeMessageData } from "./WelcomeMessageData";

export const WelcomeMessage = () => (
  <>
    <h1>{WelcomeMessageData.text.title}</h1>
    <p>{WelcomeMessageData.text.subtitle}</p>
  </>
);
