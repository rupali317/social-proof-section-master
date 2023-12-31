import React from "react";
import { RatingData } from "./RatingData";

const Ratings = Object.keys(RatingData).map((source) => {
  const Rating = RatingData[source];
  const StarIcons = Array.from({ length: Rating }, (_, index) => (
    <img
      key={index}
      src="/images/icon-star.svg"
      alt="star icon"
      width="20"
      height="20"
    />
  ));

  return (
    <article key={source}>
      <div>{StarIcons}</div>
      <p>
        Rated {Rating} Stars in {source}
      </p>
    </article>
  );
});

export const Rating = () => <section>{Ratings}</section>;
