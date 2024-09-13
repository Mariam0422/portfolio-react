import facebook from "../../img/icons/facebook.svg";
import instagram from "../../img/icons/instagram.svg";
import gitHub from "../../img/icons/gitHub.svg";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item"> 
                <a href="#!"> <img src={instagram} alt="Link" /> </a>
            </li>
            <li className="social__item">
              <a href="#!"> <img src={facebook} alt="Link" /> </a>
            </li>           
            <li className="social__item">
              <a href="#!"><img src={gitHub} alt="Link" /> </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
