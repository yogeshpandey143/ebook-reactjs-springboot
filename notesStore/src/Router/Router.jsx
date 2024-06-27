import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages.........

import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound/NotFound";

// import Components...........
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

import React from "react";

export default function Router() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}
