import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// import pages.........

import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound/NotFound";

// import Components...........
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import About from "../Pages/about/About";
import Articles from "../Pages/articles/Articles";
import Shope from "../Pages/shope/Shope";

import {Toaster} from "react-hot-toast";
import Contact from "../Pages/contact/Contact";


export default function Router() {
  

  const isSellerPath = useLocation().pathname.includes("/seller");
  return (
    <>
    {isSellerPath ? null :  <Nav></Nav>}  

      <Toaster  position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/shope" element={<Shope />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}
