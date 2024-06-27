import React from "react";

import "./PopularBook.css";

// import title props............
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";

// import galary data

import { galaryData, galleryData } from "../../Data/Data";

export default function PopularBook() {
  const filterItems =
    activeButton === all
      ? galleryData
      : galleryData.filter((item) => item.category === activeButton);
  return (
    <section>
      <div className="container popularbooks-container">
        <TitleTypeOne
          TitleTop={"some quality items"}
          Title={"Popular Books"}
          className={"popularbooks-title"}
        />

        <div className="filter-buttons">
          <button className={activeButton=== 'all'? 'active' : ''} onClick={()=> handleFilterChange('all')}>All</button>
          <button>Business</button>
          <button>Adventure</button>
          <button>Technology</button>
          <button>Fantacy</button>
          <button>Romantic</button>
        </div>

        <div className="gallery">
          {filterItems.map(({ name, writer, price, image }, index) => {
            return (
              <div className="gallery-item" key={index}>
                <div className="popularbook-image">
                  <img src={image} alt="" />
                </div>

                <div className="popularbook-info">
                  <h4>{name}</h4>
                  <div>
                    <small>{writer}</small>
                  </div>
                  <h5>
                    <small>{price}</small>
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
