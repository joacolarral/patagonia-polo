import { shape, string } from 'prop-types';

const AboutPP = (props) => {
  const { content, lang } = props;

  return (
    <div id="about-pp">
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
      </div>
    </div>
  );
};

AboutPP.propTypes = {
  content: shape({ items: shape({}) }).isRequired,
  lang: string.isRequired,
};

export default AboutPP;
