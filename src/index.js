import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Footer } from "./components/Footer";
import reportWebVitals from "./reportWebVitals";

const main = ReactDOM.createRoot(document.getElementById("main"));
const footer = ReactDOM.createRoot(document.getElementById("footer"));

main.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

reportWebVitals(console.log());
