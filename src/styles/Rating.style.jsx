import styled from "styled-components";

export const RatingCard = styled.article`
  padding: var(--space-s-3) var(--space-s-3) var(--space-s-1) var(--space-s-3);
  background-color: var(--neutral-color-2);
  border-radius: var(--border-radius-soft);
  color: var(--primary-color-1);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-s);
  display: flex;
  flex-direction: column;
  gap: var(--space-s-2);
  align-items: center;
`;

export const StarSection = styled.div`
  display: flex;
  gap: var(--space-xs);
`;
