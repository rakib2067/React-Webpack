import { Footer } from "./Footer";
import { Header } from "./Header";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import "./index.css";

export const Layout = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      let resp = await fetch(
        "https://api.lyrics.ovh/v1/Meek Mill/Championships"
      );
      let data = await resp.json();
      setData(data.lyrics);
    };
    fetchData();
  }, []);
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
