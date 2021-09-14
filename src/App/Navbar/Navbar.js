import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import PatagoniaLogo from '../../assets/logos/logo-patagonia.png';
const Navbar = (props) => {
  const { content, lang } = props;
  const { items } = content;
  return (
    <div className="navbar-fixed">
      <div className="navbar-container">
        <div className="image-container">
          <img src={PatagoniaLogo} />
        </div>
        <div className="navbar-items">
          {items.map((item) => {
            return (
              <div key={item.name} className="navigation-item">
                <a href={`#${item.name}`} target="_self">
                  {item.language[lang]}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  content: shape({
    items: arrayOf(
      shape({
        name: string,
        language: {
          en: string,
          es: string,
        },
      }).isRequired
    ),
  }).isRequired,
  lang: string.isRequired,
};

export default Navbar;
