// import React from "react";

import "./CopyRight.css";

import { FootersLinksData } from "../../Data/Data";

function CopyRight() {
  return (
    <div className="footer-copyright">
      <div className="container copyright-container">
        <p>2024 Yogesh Pandey. All right reserved </p>
        <div className="footer-socials">
          {FootersLinksData.socials.map((item, index) => {
            return (
              <a href={item.link} key={index}>
                <item.icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CopyRight;
