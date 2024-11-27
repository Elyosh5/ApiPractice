import React from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainRouter from "../../routes/MainRouter";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <MainRouter />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
