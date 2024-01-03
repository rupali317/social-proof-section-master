import styled from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

export const TestimonialCard = styled.article`
  background-color: var(--primary-color-1);
  border-radius: var(--border-radius-soft);
  text-align: left;
  color: var(--neutral-white);
  font-size: var(--font-size-base);
  padding: var(--space-l-1) var(--space-m-3) var(--space-m-5);
  display: grid;
  grid-template-columns: 2.5rem auto;
  grid-template-rows: auto auto var(--space-s-1) auto;
  column-gap: var(--space-base-2);
  row-gap: var(--space-xs);
  grid-template-areas:
    "profile-picture person-name"
    "profile-picture buyer-status"
    ". ."
    "review review";

  @media (min-width: ${DesktopWidth}) {
    grid-template-rows: auto auto var(--space-base-2) auto;
  }
`;

export const ProfilePic = styled.img`
  border-radius: var(--border-radius-round);
  grid-area: profile-picture;
`;

export const PersonName = styled.h2`
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-s);
  align-self: end;
  grid-area: person-name;
`;

export const BuyerStatus = styled.em`
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-s);
  color: var(--primary-color-2);
  font-style: normal;
  align-self: start;
  grid-area: buyer-status;
`;

export const Review = styled.p`
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-base);
  letter-spacing: var(--letter-spacing-s);
  grid-area: review;
`;
