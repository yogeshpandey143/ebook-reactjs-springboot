import React from "react";

import "./LatestArticle.css";
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";
import { lettestArticleData } from "../../Data/Data";
import { ImFacebook } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function LatestArticle() {
  return (
    <section className="latestArticle">
      <div className="container latest-article-container">
        <TitleTypeOne Title={"Latest Article"} TitleTop={"Read our articles"} />

        <div className="latest-article-content">
          {lettestArticleData.map(
            (
              {
                titLink,
                title,
                date,
                instLink,
                fbLink,
                twitaLink,
                inspiration,
                image,
              },
              index
            ) => {
              return (
                <article className="latest-article" key={index}>
                  <div className="article-image">
                    <img src={image} alt="" />
                  </div>

                  <div className="article-info">
                    <h5>{date}</h5>
                    <Link to={titLink}>
                      <h3>{title}</h3>
                    </Link>
                  </div>

                  <div className="latest-article-social">
                    <p>{inspiration}</p>
                    <div className="article-social">
                      <a href={fbLink}>
                        <ImFacebook />
                      </a>
                      <a href={instLink}>
                        <FiInstagram />
                      </a>
                      <a href={twitaLink}>
                        <RiTwitterLine />
                      </a>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>

        <Link to={"*"} className="btn btn-border">
          read all articles
          <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default LatestArticle;
