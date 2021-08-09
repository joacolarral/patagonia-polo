import React from 'react';
import { shape, string } from 'prop-types';

const Navbar = (props) => {
  const { content, lang } = props;
  const { items } = content;
  return (
    <div className="navbar-fixed">
      <div className="navbar-container">
        <div className="image-container">
          <div>logo</div>
        </div>
        <div className="navbar-items">
          {items.map((item) => {
            return (
              <div className="navigation-item">
                <a src={`${item.name}`}>{item.language[lang]}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  content: shape({ items: shape({}) }).isRequired,
  lang: string.isRequired,
};

export default Navbar;
