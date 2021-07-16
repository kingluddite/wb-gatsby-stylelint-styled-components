import React from "react";
import "normalize.css"; // reset
import Footer from "./Footer";
import Nav from "./Nav";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  // console.log(props);
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Nav />

      {children}
      <Footer />
    </div>
  );
}
