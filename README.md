# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [PageSpeed Insights results](#pagespeed-insights-results)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Tested with](#tested-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size

### Screenshots

![Social proof section master desktop](./public/images/Social-proof-section-master-desktop.png)
![Social proof section master mobile](./public/images/Social-proof-section-master-mobile.png)

### PageSpeed Insights results

[Mobile version](https://pagespeed.web.dev/analysis/https-social-proof-section-master-rc-netlify-app/xldzag2tuw?form_factor=mobile)

![PageSpeed insights mobile](./public/images/Page-speed-insights-mobile.png)

[Desktop version](https://pagespeed.web.dev/analysis/https-social-proof-section-master-rc-netlify-app/xldzag2tuw?form_factor=desktop)

![PageSpeed insights desktop](./public/images/Page-speed-insights-desktop.png)

### Links

- Solution URL: [Social proof section master github](https://github.com/rupali317/social-proof-section-master)
- Live Site URL: [Social proof section master challenge live](https://social-proof-section-master-rc.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### Tested with

- Browsers used for testing: Google Chrome, Firefox, Safari, Brave, Microsoft Edge
- Devices:
  - (Real) MacBook Pro (15 inch), Samsung Galaxy A33 5G, Samsung Galaxy S20+
  - (Virtual) The mobile and tablet devices mentioned under Chrome's dev console

### What I learned

- clip-path, is more widely adopted as compared to `clip: rect(0,0,0,0)`. The latter is deprecated and can be used if one wants to support IE

```css
.visually-hidden:not(:focus):not(:active) {
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

- The css definition of .visually-hidden cannot be display:none since it will be ignored by screen readers.

### Continued development

- The decorative images contributes to high LCP. Explore ways to reduce the LCP.
- Explore if clipping of the decorative images is appropraite or if there are better solutions.

### Useful resources

- [Learn CSS Grid the easy way](https://www.youtube.com/watch?v=rg7Fvvl3taU&ab_channel=KevinPowell) - Provides the demo of CSS grids basics. A good refresher.
- [A guide to learning CSS grid](https://learncssgrid.com/) - Provides a clear documentation of the Grid functionalities.
- [Accessibility Insights for Web](https://chromewebstore.google.com/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni) - This Google chrome extension is handy since it provides accessibility tests such as the color contrast, bypass mechansim, focus order, keyboard navigation, no missing headers, headling level, link purpose.
- [Anatomy of visually hidden](https://www.tpgi.com/the-anatomy-of-visually-hidden/) - Explains the purpose of each CSS property of the visually hidden styles

## Author

- Website - [Rupali Roy Choudhury](https://www.linkedin.com/in/rupali-rc/)
- Frontend Mentor - [@rupali317](https://www.frontendmentor.io/profile/rupali317)

## Acknowledgments

- I express my gratitude towards my mentor - Deborah for the insightful code review session.
- I also extend my thanks to members from the Front end mentor community who helped clear my misconceptions - Chamu, Grace, Melvin
