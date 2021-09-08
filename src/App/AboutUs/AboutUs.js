import CucuAboutUs from '../../assets/cucu-about-us.jpg';
import TinAboutUs from '../../assets/tin-about-us.jpg';

const AboutUs = (props) => {
  const { content, lang } = props;

  return (
    <div id="about-us">
      <div className="container">
        <div className="content">
          <h1>{content.left_content.title[lang]}</h1>
          <h2>{content.left_content.subtitle[lang]}</h2>
          <p>{content.left_content.description[lang]}</p>
        </div>
        <div className="images-container">
          <img src={TinAboutUs} />
          <img src={CucuAboutUs} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
