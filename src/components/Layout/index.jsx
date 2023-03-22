import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import "../../scss/style.css";

const Layout = ({ children }) => {
  return (
    <div className="layout--container">
      <div className="layout--container__navbar">
        <Header />
        <Navbar />
      </div>
      <div className="wrapper--main-footer">
        <main>{children}</main>
        <div className="layout--container__footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
