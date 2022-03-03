import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SuperFooter from "./SuperFooter";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <SuperFooter />
    </>
  );
};

export default Layout;
