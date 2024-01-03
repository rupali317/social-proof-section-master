import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Footer } from "./components/Footer";
import { Picture } from "./components/Picture";
import reportWebVitals from "./reportWebVitals";

const main = ReactDOM.createRoot(document.getElementById("main"));
const footer = ReactDOM.createRoot(document.getElementById("footer"));

main.render(
  <React.StrictMode>
    <Picture
      mobileVersion="/images/bg-pattern-top-mobile.svg"
      desktopVersion="/images/bg-pattern-top-desktop.svg"
      className="top-left-pattern"
    />
    <App />
    <Picture
      mobileVersion="/images/bg-pattern-bottom-mobile.svg"
      desktopVersion="/images/bg-pattern-bottom-desktop.svg"
      className="bottom-right-pattern"
    />
  </React.StrictMode>
);

footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

reportWebVitals(console.log());
