import React from "react";
import { RatingData } from "./RatingData";

const Ratings = Object.keys(RatingData).map((source) => {
  const Rating = RatingData[source];
  return (
    <article key={source}>
      <p>
        Rated {Rating} Stars in {source}
      </p>
    </article>
  );
});

export const Rating = () => <section>{Ratings}</section>;
