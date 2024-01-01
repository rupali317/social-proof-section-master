import React from "react";
import { Testimonials } from "./TestimonialData";

const Cards = Object.keys(Testimonials).map((personName) => {
  const Testimonial = Testimonials[personName];
  return (
    <article key={personName}>
      <img
        src={Testimonial.image}
        alt={Testimonial.imageAltText}
        width="40"
        height="40"
      />
      <h5>{personName}</h5>
      {Testimonial.isVerifiedBuyer && <h6>{Testimonial.buyerStatus}</h6>}
      <p>{Testimonial.review}</p>
    </article>
  );
});

export const TestimonialCards = () => (
  <section className="testimonial-section">{Cards}</section>
);
