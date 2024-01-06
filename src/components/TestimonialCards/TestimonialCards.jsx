import React from "react";
import { Testimonials } from "./TestimonialData";
import * as TestimonialStyles from "../../styles/TestimonialCard.style";

const Cards = Object.keys(Testimonials).map((personName) => {
  const Testimonial = Testimonials[personName];
  return (
    <TestimonialStyles.TestimonialCard
      key={personName}
      className={Testimonial.gridArea}
    >
      <TestimonialStyles.ProfilePic
        src={Testimonial.image}
        alt={Testimonial.imageAltText}
        width="40"
        height="40"
      />
      <TestimonialStyles.PersonName>{personName}</TestimonialStyles.PersonName>
      {Testimonial.isVerifiedBuyer && (
        <TestimonialStyles.BuyerStatus>
          {Testimonial.buyerStatus}
        </TestimonialStyles.BuyerStatus>
      )}
      <TestimonialStyles.Review>
        {'"' + Testimonial.review + '"'}
      </TestimonialStyles.Review>
    </TestimonialStyles.TestimonialCard>
  );
});

export const TestimonialCards = () => (
  <section className="testimonial-section">
    <h2 className="screen-reader-only">Testimonials</h2>
    {Cards}
  </section>
);
