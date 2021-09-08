import CucuAboutUs from '../../assets/cucu-about-us.jpg';
import TinAboutUs from '../../assets/tin-about-us.jpg';
import { shape, string } from 'prop-types';

const AboutUs = (props) => {
  const { content, lang } = props;

  return (
    <div id="about-us">
      <div className="container">
        <div className="content">
          <div className="title-container">
            <h1>{content.left_content.title[lang]}</h1>
            <h2>{content.left_content.subtitle[lang]}</h2>
          </div>
          <div className="description-container">
            <p>{content.left_content.description[lang]}</p>
          </div>
        </div>
        <div className="images-container">
          <img src={TinAboutUs} alt="juan-martin-gramajo" />
          <img src={CucuAboutUs} alt="juan-cruz-gramajo" />
        </div>
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  content: shape({ items: shape({}) }).isRequired,
  lang: string.isRequired,
};

export default AboutUs;
