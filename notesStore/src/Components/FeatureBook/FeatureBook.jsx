import React from "react";
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";

// import react icon

import { MdOutlineArrowBack } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Import featureBooksData...........

import { featuredBooksData } from "../../Data/Data";

// link from react router.........
import { Link } from "react-router-dom";

const breakpoints = {
  // when window width is <= 499px
  1024: {
    slidesPerView: 4,
    spaceBetweenSlides: 30,
  },
  // when window width is <= 999px
  768: {
    slidesPerView: 3,
    spaceBetweenSlides: 20,
  },
  480: {
    slidesPerView: 2,
    spaceBetweenSlides: 10,
  },

  0: {
    slidesPerView: 1,
    spaceBetweenSlides: 5,
  },
};

function FeatureBook() {
  return (
    <section className="featured">
      <div className=" container feature-book-container">
        {/**Title props */}
        <TitleTypeOne TitleTop={"Some Quality Items"} Title={"Feature Books"} />

        {/**..........fetureBook Slider..... */}

        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={breakpoints}
          modules={[Pagination]}
        >
          {featuredBooksData.map(
            ({ img, imgLink, name, nameLink, writer, price }, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="featurebook-box">
                    <Link to={imgLink} className="featurebook">
                      <img src={img} alt="" />
                    </Link>

                    <div className="featurebook-info">
                      <Link to={nameLink}>{name}</Link>

                      <div>
                        <small>{writer}</small>
                      </div>
                      <h5>
                        <span>{price}</span>
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          )}

          <div className="feature-border container"> </div>
          {/**   swiper pagination */}
          <div className="swiper-pagination"></div>

          <Link to="*" className="feature-btn btn">
            veiw all products
            <MdOutlineArrowForward />
          </Link>
        </Swiper>
      </div>
    </section>
  );
}

export default FeatureBook;
