import React from "react";

import Header from "../Components/Header/Header";
import Brands from "../Components/Brands/Brands";
import BestSellingBook from "../Components/BestSelling/BestSellingBook";

import FeatureBook from "../Components/FeatureBook/FeatureBook";

import PopularBook from "../Components/PopularBook/PopularBook";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Brands />
      <FeatureBook />
      <BestSellingBook />
      <PopularBook />

    </div>
  );
}
