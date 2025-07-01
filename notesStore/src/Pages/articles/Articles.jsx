import { ImFacebook } from "react-icons/im";
import "./Articles.css";
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne"
import { FiInstagram } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { lettestArticleData } from "../../Data/Data";


const Articles = () => {
  return (
   <section className="article" id="article">
         <div className="container article-container">
           <TitleTypeOne Title={"Articles"} TitleTop={"Read our articles"} />
   
           <div className="article-content">
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
                   <article className="article" key={index}>
                     <div className="article-image">
                       <img src={image} alt="" />
                     </div>
   
                     <div className="article-info">
                       <h5>{date}</h5>
                       <Link to={titLink}>
                         <h3>{title}</h3>
                       </Link>
                     </div>
   
                     <div className="article-social">
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
         </div>
       </section>
  )
}

export default Articles