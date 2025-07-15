import "./Shope.css"
// import title props............
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";

// import galary data

import { galleryData } from "../../Data/Data";

import {  useState } from "react";
import { useAppContext } from "../../context/AppContext";
const Shope = () => {
 const [activeButton, setActiveButton] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const {addToCart, updateCartItems, removeFromCart, cartItem , navigate, books, searchQuery,setSearchQuery } = useAppContext();

  const handleFilterChange = (category) => {
    setActiveButton(category);
  };

  const handleSortByChange = (sortOption) => {
    setSortBy(sortOption);
  };

   
  const filterItems =
    activeButton === "all"
      ? books
      : books.filter((item) => item.category === activeButton);


       const sortedItems = [...filterItems].sort((a, b) => {
    if (sortBy === "priceLowToHigh") {
      return parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""));
    } else if (sortBy === "priceHighToLow") {
      return parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", ""));
    } else if (sortBy === "newest") {
      return b.id - a.id; // Assuming higher id means newer
    } else {
      return 0; // No sorting (default)
    }
  });

  return (
    <section>
      <div className="container shope-container">
        <TitleTypeOne
          TitleTop={"Our Quality Items"}
          Title={"Shop Books"}
          className={"books-title"}
        />

        <div className="filter-buttons">
          <button
            className={activeButton === "all" ? "active" : ""}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={activeButton === "Business" ? "active" : ""}
            onClick={() => handleFilterChange("Business")}
          >
            Business
          </button>
          <button
            className={activeButton === "Adventure" ? "active" : ""}
            onClick={() => handleFilterChange("Adventure")}
          >
            Adventure
          </button>
          <button
            className={activeButton === "Technology" ? "active" : ""}
            onClick={() => handleFilterChange("Technology")}
          >
            Technology
          </button>
          <button
            className={activeButton === "Fantacy" ? "active" : ""}
            onClick={() => handleFilterChange("Fantacy")}
          >
            Fantacy
          </button>
          <button
            className={activeButton === "Romantic" ? "active" : ""}
            onClick={() => handleFilterChange("Romantic")}
          >
            Romantic
          </button>
        </div>

        <div className="showcase">
        <div className="side-bar">   
                <div className="sortBy">
                    <h4>Sort By</h4>
                     <select  className="select" onChange={(e) => handleSortByChange(e.target.value)}>
                        <option className="select-option" value="default">Default</option>
                        <option className="select-option" value="priceLowToHigh">Price: Low to High</option>
                        <option className="select-option" value="priceHighToLow">Price: High to Low</option>
                        <option  className="select-option" value="newest">Newest</option>
                        </select>  
              </div>
              </div>
        

        <div className="gallery">
          {sortedItems.slice(0,8).map(({ name, writer, price, image }, index) => {
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
      </div>
    </section>
  );
}

export default Shope