import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages.........

import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound/NotFound";

// import Components...........
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import About from "../Pages/about/About";
import Articles from "../Pages/articles/Articles";
import Shope from "../Pages/shope/Shope";



export default function Router() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
         <Route path="/shope" element={<Shope />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}
