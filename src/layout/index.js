import { Footer } from "./Footer";
import { Header } from "./Header";
import React from "react";
import { Outlet } from "react-router-dom";

import "./index.css";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
