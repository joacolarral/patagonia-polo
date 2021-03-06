import { shape, string } from 'prop-types';
import { Facebook, Instagram, Mail } from '../../assets/icons';

const HomeBanner = (props) => {
  const { content, lang, handleLanguage } = props;
  const { left_content } = content;
  return (
    <div id="home">
      <div className="home-container">
        <div className="banner-left">
          <div className="title-container">
            <h2>{left_content.subtitle[lang]}</h2>
            <h1>{left_content.title[lang]}</h1>
          </div>
          <div className="language-selection">
            <div onClick={() => handleLanguage('en')}>EN</div>
            <div onClick={() => handleLanguage('es')}>ES</div>
          </div>
        </div>
        <div className="banner-right">
          <div className="side-text">
            <div>Arelauquen Golf & Country Club</div>
          </div>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/patagonia.polo/"
              className="icon"
            >
              <Instagram />
            </a>
            <a className="icon">
              <Facebook />
            </a>
            <a className="icon">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeBanner.propTypes = {
  content: shape({ items: shape({}) }).isRequired,
  lang: string.isRequired,
};

export default HomeBanner;
