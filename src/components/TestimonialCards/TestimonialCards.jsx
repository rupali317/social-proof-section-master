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
        className="testimonial-card__profile-pic"
        src={Testimonial.image}
        alt={Testimonial.imageAltText}
        width="40"
        height="40"
      />
      <TestimonialStyles.PersonName className="testimonial-card__person-name">
        {personName}
      </TestimonialStyles.PersonName>
      {Testimonial.isVerifiedBuyer && (
        <TestimonialStyles.BuyerStatus className="testimonial-card__buyer-status">
          {Testimonial.buyerStatus}
        </TestimonialStyles.BuyerStatus>
      )}
      <TestimonialStyles.Review className="testimonial-card__review">
        {'"' + Testimonial.review + '"'}
      </TestimonialStyles.Review>
    </TestimonialStyles.TestimonialCard>
  );
});

export const TestimonialCards = () => (
  <section className="testimonial-section">{Cards}</section>
);
