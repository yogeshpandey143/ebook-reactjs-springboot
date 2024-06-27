import React from "react";
import "./Header.css";

// React arrow icon------0------
import { MdOutlineArrowBack } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";

// import header book for show case
import { headerBooks } from "../../Data/Data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Link from  React Router

import { Link } from "react-router-dom";

import { Navigation, Pagination } from "swiper/modules";

// Shape SVG import------------

import headerShape from "../../assets/header-shape.svg";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: ".button-prev-slide",
            nextEl: ".button-next-slide",
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[Navigation, Pagination]}
        >
          {headerBooks.map(({ title, info, img, btnLink }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="header-wrapper container">
                  {/*.................Header Left..........*/}
                  <div className="header-left">
                    <h1>{title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: info }}></p>

                    <Link className="btn btn-border" to={btnLink}>
                      Learn More
                    </Link>
                  </div>
                  {/*.................Header Right..........*/}

                  <div className="header-right">
                    <img src={img} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          {/** Header Pagination */}
          <div className="slider-button">
            <div className="button-prev-slide slidebutton">
              <MdOutlineArrowBack />
            </div>
            <div className="button-next-slide slidebutton">
              <MdOutlineArrowForward />
            </div>
          </div>

          {/** Header Pagination */}
          <div className="slider-button">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>

        {/** Header Shape */}

        <div className="header-shape">
          <img src={headerShape} className="header-s" alt="nothing" />
        </div>
      </div>
    </header>
  );
}
