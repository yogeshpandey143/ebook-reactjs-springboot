import "./Footer.css";

import { Link } from "react-router-dom";
import { FootersLinksData } from "../../Data/Data";
import CopyRight from "../CopyRight/CopyRight";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        {/** about param */}

        <div>
          <h4>About Us</h4>
          <ul className="about-params param-links">
            {FootersLinksData.Aboutus.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4>Discover</h4>
          <ul className="discover-params param-links">
            {FootersLinksData.Discover.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4>My Account</h4>
          <ul className="account-params param-links">
            {FootersLinksData.Myaccount.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul className="help-params param-links">
            {FootersLinksData.Help.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4>Social</h4>
          <ul className="social-params param-links">
            {FootersLinksData.socials.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <CopyRight></CopyRight>
    </footer>
  );
}
