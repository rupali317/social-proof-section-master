import React from "react";
import { RatingData } from "./RatingData";
import * as RatingStyles from "../../styles/Rating.style";

const Ratings = RatingData.map((object, index) => {
  const Source = object.source;
  const Rating = object.rating;
  const GridArea = object.gridArea;
  const StarIcons = Array.from({ length: Rating }, (_, index) => (
    <RatingStyles.Img
      key={index}
      src="/images/icon-star.svg"
      alt=""
      width="16"
      height="16"
    />
  ));

  return (
    <RatingStyles.RatingCard key={index} className={GridArea}>
      <RatingStyles.StarSection>{StarIcons}</RatingStyles.StarSection>
      <p>
        Rated {Rating} Stars in {Source}
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
