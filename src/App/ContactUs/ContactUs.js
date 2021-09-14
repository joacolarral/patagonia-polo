import { Phone, Facebook, Instagram, Mail } from '../../assets/icons';

const ContactUs = (props) => {
  const { content, lang } = props;
  const { title, subtitle, input_name, input_mail, input_message } = content;
  return (
    <div id="contact-us">
      <div className="container">
        <h1>{title[lang]}</h1>
        <h2>{subtitle[lang]}</h2>
        <div className="info-container">
          <div className="form-container">
            <div className="inputs-container">
              <div className="input-box">
                <label htmlFor="name" className="prefix">
                  {input_name[lang]}
                </label>
                <input id="name" name="name" />
              </div>
              <div className="input-box">
                <label htmlFor="mail" className="prefix">
                  {input_mail[lang]}
                </label>
                <input id="mail" name="mail" />
              </div>
            </div>
            <div className="textarea-box">
              <label htmlFor="message" className="prefix">
                {input_message[lang]}
              </label>
              <textarea rows="7" id="message" name="message" />
            </div>
          </div>
          <div className="external-contact">
            <div className="space-blank" />
            <div className="social-media">
              <div className="icons">
                <Phone />
              </div>
              <div>+54 9 11 58030952</div>
            </div>
            <div className="social-media">
              <div className="icons">
                <Mail />
              </div>
              <div>patagoniapoloweek@gmail.com</div>
            </div>
            <div className="social-media">
              <div className="icons">
                <Instagram />
              </div>
              <div>patagoniapolo</div>
            </div>
            <div className="social-media">
              <div className="icons">
                <Facebook />
              </div>
              <div>Patagonia Polo Week</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
