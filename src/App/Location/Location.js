import LocationImg from '../../assets/location.jpg';

const Location = () => {
  return (
    <div id="#location">
      <a
        href="https://www.google.com/maps/place/Arelauquen+Golf+%26+Country+Club/@-41.1733227,-71.3963377,16.13z/data=!4m12!1m2!2m1!1sarelauquen+polo!3m8!1s0x961a704747722fe1:0x1c72f63fa07a66c8!5m2!4m1!1i2!8m2!3d-41.1715769!4d-71.3937306!15sCg9hcmVsYXVxdWVuIHBvbG9aESIPYXJlbGF1cXVlbiBwb2xvkgEMY291bnRyeV9jbHVimgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU56TUhKTFpEaEJSUkFC"
        target="_blank"
      >
        <img width="1440" src={LocationImg} />
      </a>
    </div>
  );
};

export default Location;
