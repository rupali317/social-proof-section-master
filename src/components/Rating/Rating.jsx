import React from "react";
import { RatingData } from "./RatingData";
import * as RatingStyles from "../../styles/Rating.style";

const Ratings = Object.keys(RatingData).map((source) => {
  const Rating = RatingData[source].rating;
  const GridArea = RatingData[source].gridArea;
  const StarIcons = Array.from({ length: Rating }, (_, index) => (
    <img
      key={index}
      src="/images/icon-star.svg"
      alt="star icon"
      width="16"
      height="16"
    />
  ));

  return (
    <RatingStyles.RatingCard key={source} className={GridArea}>
      <RatingStyles.StarSection>{StarIcons}</RatingStyles.StarSection>
      <p>
        Rated {Rating} Stars in {source}
      </p>
    </RatingStyles.RatingCard>
  );
});

export const Rating = () => (
  <section className="rating-section">
    <h2 className="screen-reader-only">Reviews</h2>
    {Ratings}
  </section>
);
