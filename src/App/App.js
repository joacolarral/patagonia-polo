import './App.scss';
import { useState } from 'react';
import infoSections from '../info-sections.json';
import Navbar from './Navbar/Navbar';
import HomeBanner from './HomeBanner/HomeBanner';

function App() {
  const [language, setLanguage] = useState('es');

  const handleLanguage = (languageSelected) => {
    setLanguage(languageSelected);
  };

  return (
    <div className="App">
      <Navbar content={infoSections.navbar} lang={language} />
      <HomeBanner
        handleLanguage={handleLanguage}
        content={infoSections.banner}
        lang={language}
      />
    </div>
  );
}

export default App;
