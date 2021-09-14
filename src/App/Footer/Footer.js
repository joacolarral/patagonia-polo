import Navbar from '../Navbar/Navbar';
import Cavalier from '../../assets/logos/logo-cavalier.png';
import PrensaPolo from '../../assets/logos/logo-prensa-polo.png';
import Sixt from '../../assets/logos/logo-sixt.png';
import Mail from '../../assets/icons/Mail.js';
import Phone from '../../assets/icons/Phone';

const Footer = (props) => {
  const { content, lang } = props;
  return (
    <div id="footer">
      <div className="container">
        <Navbar content={content} lang={lang} />
        <div className="divider" />
        <div className="social-and-brands">
          <div className="socials">
            <div className="social">
              <div className="icon">
                <Phone />
              </div>
              <div>+54 9 11 58030952</div>
            </div>
            <div className="social">
              <div className="icon">
                <Mail />
              </div>
              <div>patagoniapoloweek@gmail.com</div>
            </div>
          </div>
          <div className="brands">
            <div className="icon">
              <img src={Sixt} />
            </div>
            <div className="icon">
              <img src={PrensaPolo} />
            </div>
            <div className="icon">
              <img src={Cavalier} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
