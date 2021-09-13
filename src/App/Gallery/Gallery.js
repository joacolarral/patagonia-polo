import { useState, useEffect, useLayoutEffect } from 'react';
import Dropdown from 'react-dropdown';
import template from '../../assets/photo-gallery1.jpg';
function useWindowSize() {}

const Gallery = (props) => {
  const { content, lang } = props;
  const lastSeason =
    content.subtitle[lang][content.subtitle[lang].length - 1].value;
  const [galleryValue, setGalleryValue] = useState(lastSeason);
  const [imgWidth, setImgWidth] = useState(window.innerWidth * 0.85);
  useEffect(() => {
    const galleryYear = galleryValue.split('_')[1];
    const galleryValueLang = content.subtitle[lang].find((gallery) => {
      return gallery.value.includes(galleryYear) && gallery;
    });
    setGalleryValue(galleryValueLang.value);
  }, [lang]);

  useLayoutEffect(() => {
    function updateSize() {
      setImgWidth(window.innerWidth * 0.85);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleChange = (option) => {
    console.log(option);
  };

  return (
    <div id="gallery">
      <div className="container">
        <h1>{content.title[lang]}</h1>
        <Dropdown
          className="subtitle"
          controlClassName="dropdown-control-custom"
          options={content.subtitle[lang]}
          onChange={handleChange}
          value={galleryValue}
        />
        <div className="photo-gallery-container">
          <img width={`${imgWidth}`} src={template} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
