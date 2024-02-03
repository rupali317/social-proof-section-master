import React from "react";
import { RatingItem } from "./RatingItem";
import * as RatingStyles from "../../styles/Rating.style";

//map({source, rating, gridArea}, index)   map(({source, rating, gridArea}, index) => {...})
/// Styled component -> size and spacing
const Ratings = RatingItem.map(({ source, rating, gridArea }, index) => {
  const StarIcons = Array.from({ length: rating }, (_, index) => (
    <RatingStyles.Img
      key={index}
      src="/images/icon-star.svg"
      alt=""
      width="16"
      height="16"
    />
  ));

  return (
    <RatingStyles.RatingCard key={index} className={gridArea}>
      <RatingStyles.StarSection>{StarIcons}</RatingStyles.StarSection>
      <p>
        Rated {rating} Stars in {source}
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
