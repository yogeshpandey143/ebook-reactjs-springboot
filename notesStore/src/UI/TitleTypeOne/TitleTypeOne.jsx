import React from "react";
import "./TitleTypeOne.css";

// import victor image

import victor from "../../assets/victor.png";

function TitleTypeOne({ ClassName, Title, TitleTop }) {
  return (
    <div className={`titleTypeOne ${ClassName}`}>
      <small className="">{TitleTop}</small>

      <div className="heading-H">
        <div className="link"></div>
        <h2>{Title}</h2>
        <div className="line"></div>
      </div>

      <img src={victor} alt="" className="victor" />
    </div>
  );
}

export default TitleTypeOne;
