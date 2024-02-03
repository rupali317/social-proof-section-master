import React from "react";
import { RatingItem } from "./RatingItem";
import * as RatingStyles from "../../styles/Rating.style";

/// RRC: Styled component -> size and spacing
const Ratings = RatingItem.map(({ ...item }, index) => {
  const StarIcons = Array.from({ length: item.rating }, (_, index) => (
    <RatingStyles.Img
      key={index}
      src="/images/icon-star.svg"
      alt=""
      width="16"
      height="16"
    />
  ));

  return (
    <RatingStyles.RatingCard key={index} className={item.gridArea}>
      <RatingStyles.StarSection>{StarIcons}</RatingStyles.StarSection>
      <p>
        Rated {item.rating} Stars in {item.source}
      </p>
    </RatingStyles.RatingCard>
  );
});

export const Rating = () => (
  <section className="rating-section">
    <h2 className="visually-hidden">Reviews</h2>
    {Ratings}
  </section>
);
