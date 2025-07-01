
import "./TitleTypeOne.css";
import PropTypes from "prop-types";

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
TitleTypeOne.propTypes = {
  ClassName: PropTypes.string,
  Title: PropTypes.string,
  TitleTop: PropTypes.string,
};

export default TitleTypeOne;

