import styled from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

export const Title = styled.h1`
  color: var(--primary-color-1);
  font-size: var(--space-l-1);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-l);
  letter-spacing: var(--letter-spacing-m);

  @media (min-width: ${DesktopWidth}) {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);
    letter-spacing: var(--letter-spacing-l);
  }
`;

export const SubTitle = styled.p`
  color: var(--neutral-color-1);
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-m);
  letter-spacing: var(--letter-spacing-base);
`;

export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 20.4375rem; /* 327px */
  gap: var(--space-s-4);

  @media (min-width: ${DesktopWidth}) {
    gap: var(--space-s-3);
    max-width: 27.8125rem; /* 445px */
  }
`;
