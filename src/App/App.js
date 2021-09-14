import './App.scss';
import { useState } from 'react';
import infoSections from '../info-sections.json';
import Navbar from './Navbar/Navbar';
import HomeBanner from './HomeBanner/HomeBanner';
import AboutUs from './AboutUs/AboutUs';
import AboutPP from './AboutPP/AboutPP';
import Location from './Location/Location';
import Courses from './Courses/Courses';
import Gallery from './Gallery/Gallery';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';

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
      <AboutUs content={infoSections.about_us} lang={language} />
      <AboutPP content={infoSections.about_pp} lang={language} />
      <Location />
      <Courses content={infoSections.courses} lang={language} />
      <Gallery content={infoSections.gallery} lang={language} />
      <ContactUs content={infoSections.contact_us} lang={language} />
      <Footer content={infoSections.navbar} lang={language} />
    </div>
  );
}

export default App;
