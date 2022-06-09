
import React from "react";
import Header from '../common/Header/Header/Header';
import Footer from '../common/Footer/Footer';

function Layout({ children }) {
  return (
    <>
      <Header/>
        {children}
      <Footer/>
    </>
  );
}

export default Layout;
