import React from "react";

import "./Brands.css";
//***********import brand data */

import { brandsData } from "../../Data/Data";

function Brands() {
  return (
    <>
      <section className="Brands">
        <div className="container brands-container">
          {brandsData.map(({ img }, index) => {
            return (
              <div className="brands">
                <img src={img} alt="" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Brands;
