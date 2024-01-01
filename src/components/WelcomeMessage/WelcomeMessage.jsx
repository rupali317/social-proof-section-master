import React from "react";
import { WelcomeMessageData } from "./WelcomeMessageData";
import * as WelcomeMessageStyles from "../../styles/WelcomeMessage.style";

export const WelcomeMessage = () => (
  <WelcomeMessageStyles.TextSection>
    <WelcomeMessageStyles.Title>
      {WelcomeMessageData.text.title}
    </WelcomeMessageStyles.Title>
    <WelcomeMessageStyles.SubTitle>
      {WelcomeMessageData.text.subtitle}
    </WelcomeMessageStyles.SubTitle>
  </WelcomeMessageStyles.TextSection>
);
