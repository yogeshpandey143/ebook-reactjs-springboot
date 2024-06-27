import React from "react";

import "./BestSellingBook.css";

// importing Title Props.........

import TitleTypeTwo from "../../UI/TitleTypeTwo/TitleTypeTwo";

// import treeshape from assets

import TreeShape from "../../assets/treeShape.png";

// import selling data

import { sellingBooksData } from "../../Data/Data";

// import links

import { Link } from "react-router-dom";

// import arrows from router icon

import { MdOutlineArrowForward } from "react-icons/md";
export default function BestSellingBook() {
  return (
    <section className="BestSellingBook">
      {/**...........selling Book Tree Shape........ */}

      <div className="treeshape">
        <img src={TreeShape} alt="" />
      </div>
      {sellingBooksData.map(
        ({ img, infoTitle, infoTitleTop, desc, price, shopbtnLink }) => {
          return (
            <div className="container bestselling-container">
              <div className="selling-book-left">
                <img src={img} alt="" />
              </div>

              <div className="selling-book-right">
                <TitleTypeTwo
                  Title={"Best Selling Books"}
                  className="sellingBookTitle"
                />
                <div>
                  <small>{infoTitleTop}</small>
                  <h3>{infoTitle}</h3>
                  <p>{desc}</p>
                  <h5>
                    <span>{price}</span>
                  </h5>

                  <Link to={shopbtnLink} className="btn">
                    Shop Now <MdOutlineArrowForward />
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      )}
    </section>
  );
}
