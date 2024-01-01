import { createGlobalStyle } from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

export const BaseStyles = createGlobalStyle`
  :root {
      /* Colors */
      --primary-color-1: hsl(300, 43%, 22%);
      --primary-color-2: hsl(333, 80%, 67%);
      --neutral-white: hsl(0, 0%, 100%);
      --neutral-color-1: hsl(303, 10%, 53%);
      --neutral-color-2: hsl(300, 24%, 96%);

      /* Typography */
      --font-size-s: 0.8125rem; /* 13px */
      --font-size-base: 1.0625rem; /* 17px */
      --font-size-m: 1.1875rem; /* 19px */
      --font-size-l: 2.5rem; /* 40px */
      --font-size-xl: 3.5rem; /* 56px; */
      --font-weight-bold: 700;
      --font-weight-medium: 500;
      --font-weight-regular: 400;
      --letter-spacing-s: -0.019rem; /* -0.304px */
      --letter-spacing-base: -0.0395625rem; /* -0.633px */
      --letter-spacing-m: -0.0893125rem; /* -1.429px; */
      --letter-spacing-l: -0.125rem; /* -2px */
      --line-height-s: normal;
      --line-height-base: 1.375rem; /* 22px */
      --line-height-m: 1.5625rem; /* 25px */
      --line-height-l: 2rem; /* 32px; */
      --line-height-xl: 3rem; /* 48px; */

      /* Spacing */
      --space-none: 0rem;
      --space-xs: 0.25rem; /*4px */
      --space-s-1: 0.9375rem; /*15px */
      --space-s-2: 0.951875rem; /* 15.23px */
      --space-s-3: 1rem; /* 16px */ 
      --space-s-4: 1.0625rem; /* 17px */
      --space-base-1: 1.25rem; /*20px */
      --space-base-2: 1.4375rem; /* 23px */
      --space-base-3: 1.5rem; /* 24px */
      --space-m-1: 1.875rem; /*30px */
      --space-m-2: 1.9375rem; /*31px */
      --space-m-3: 2rem; /* 32px */
      --space-m-4: 2.028125rem; /*32.45px */
      --space-m-5: 2.1875rem; /* 35px */
      --space-m-6: 2.4375rem; /* 39px */
      --space-l-1: 2.5rem; /* 40px */
      --space-l-2: 2.75rem; /* 44px */
      --space-l-3: 3rem; /* 48px */
      --space-l-4: 3.0625rem; /* 49px */
      --space-xl-1: 4.4375rem; /*71px */
      --space-xl-2: 5.125rem; /* 82px */ 
      --space-xl-3: 6.1875rem; /* 99px */ 
      --space-xl-4: 7.8125rem; /*125px */

      /* Borders */
      --border-radius-none: 0rem;
      --border-radius-soft: 0.5rem; /* 8px */
      --border-radius-round: 2.5rem; /* 40px */
  }
  
  @font-face {
    font-family: "League Spartan";
    src: url("/fonts/League_Spartan/static/LeagueSpartan-Regular.ttf") format("truetype");
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "League Spartan";
    src: url("/fonts/League_Spartan/static/LeagueSpartan-Medium.ttf") format("truetype");
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "League Spartan";
    src: url("/fonts/League_Spartan/static/LeagueSpartan-Bold.ttf") format("truetype");
    font-weight: 700;
    font-display: swap;
  }
`;

export const ResetStyles = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default spaces */
  * {
    margin: 0;
    margin-block-end: 0;
    margin-block-start: 0;
    margin-inline-start: 0;
    margin-inline-end: 0 ;
    padding-block-end: 0;
    padding-block-start: 0;
    padding-inline-start: 0; 
    padding-inline-end: 0 ;
  }

/* Avoid text overflows */
 body,
 h1,
 h5,
 h6,
 p {
    overflow-wrap: break-word;
  }

  /* Prevent font size inflation */
  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /* Set shorter line heights on headings and interactive elements, Balance text wrapping on headings
  */
  h1,
  h5,
  h6 {
    line-height: 1.1;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img, picture, svg {
    max-width: 100%;
    display: block;
  }
`;

export const DefaultStyles = createGlobalStyle`
  body {
    font-family: 'League Spartan',sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--neutral-color-2);
    padding: var(--space-base-1);
    gap: var(--space-s-3);
  }

  main {
    background-color: var(--neutral-white);
    position: relative;
    max-width: 23.4375rem;
    padding: var(--space-xl-2) var(--space-base-3) var(--space-xl-3);
  }

  .top-left-pattern {
      position: absolute;
      top: 0;
      left: 0;
  }

  .bottom-right-pattern {
      position: absolute;
      bottom: 0;
      right: 0;
  }

  .rating-section {
    margin-top: var(--space-m-6);
  }

  .testimonial-section {
    margin-top: var(--space-l-4);
  }

  .rating-section, .testimonial-section {
    display: grid;
    grid-template-areas:
    'one'
    'two'
    'three';
    gap: var(--space-s-3);
  }

  .rating-card-one, .testimonial-card-one {
    grid-area: one;
  }

  .rating-card-two, .testimonial-card-two {
    grid-area: two;
  }

  .rating-card-three, .testimonial-card-three {
    grid-area: three;
  }

  @media (min-width: ${DesktopWidth}) {

    body {
        text-align: left;
    }

    main {
        max-width: 90rem; /* 1440px */
        padding: 7.375rem 10.3125rem 6.25rem; /* 118px, 165px, 100px */
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: var(--space-xl-1);
        column-gap: var(--space-m-3);
        grid-template-areas:
        'welcome-message rating-section'
        'testimonial-section testimonial-section';
    }

    .testimonial-section {
        grid-area: testimonial-section;
    }

    .testimonial-section, .rating-section {
        margin-top: auto;
        margin-bottom: auto;
    }

    .rating-section {
        grid-template-areas: 
        'one one one . .'
        '. two two two .'
        '. . three three three';
        column-gap: var(--space-none);
        grid-template-columns: var(--space-l-3) var(--space-l-3) 21.8125rem var(--space-l-3) var(--space-l-3); /* 21.8125rem=349px */
        justify-content: end;
    }

    .testimonial-section {
        grid-template-areas: 
        'one . .'
        'one two .'
        'one two three'
        '. two three'
        '. . three';
        column-gap: var(--space-m-1);
        row-gap: var(--space-none);
        grid-template-rows: var(--space-s-3) var(--space-s-3) auto var(--space-s-3) var(--space-s-3);
        grid-template-columns: repeat(3, 1fr);
    }
    
  }`;
