import { useEffect } from "react";
import Brands from "../../Components/Brands/Brands";
import "./About.css";
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";

const About = () => {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="about-container " id="about">
       <TitleTypeOne
                TitleTop={"Who We Are"}
                Title={"About Us"}
                className={"popularbooks-title"}
              />
      <p className="about-text">
        Welcome to <span className="highlight">EBook Store</span>, your one-stop destination for the best eBooks, popular articles, and hand-picked selections from top authors and publishers.
        We are passionate about making reading accessible and enjoyable for everyone. <br></br> Whether you are looking for bestsellers, featured books, popular reads, or inspiring articles, our store offers carefully curated content just for you.
        Our mission is to promote knowledge, creativity, and the joy of reading by providing a seamless digital bookstore experience. Thank you for being a part of our community.
      </p>

  
    </div>
        <div className="about-brands-container">
      <Brands />
    </div>
    </>
  )
}

export default About